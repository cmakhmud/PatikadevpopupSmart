import { useEffect, useState , useContext } from "react"
import Image from "next/image"
import { DataContext } from "../poviders/dataProvider"
import imgurl from './imgUrl.json'
export default function Modals() {

    const {components , setComponents} = useContext<any>(DataContext)
    const [pageNum , setPageNum] = useState<any>({
        activeObject:null,
        objects:[{id:1}, {id:2} , {id:3}]
    })

    useEffect(()=>{

        setPageNum({...pageNum , activeObject:pageNum.objects[0]})

        const data = components.objects.filter((f:any)=>f.id <=12)
        setComponents({...components , activeComponents:data})
    },[])

    function toggleActiveObject(index:any){
        setPageNum({...pageNum , activeObject:pageNum.objects[index]})
        
        if(index === 0){
            const data = components.objects.filter((data:any)=>data.id<=12)
            setComponents({...components , activeComponents:data})
        }
        if(index === 1){
            const data =  components.objects.filter((data:any)=>(data.id<=24)&&(data.id>12))
            setComponents({...components , activeComponents:data})
        }if(index===2){
            const data = components.objects.filter((data:any)=>(data.id<=36)&&(data.id>24))
            setComponents({...components , activeComponents:data})
        }

    }

    function selectModal(index:any){
        setComponents({...components , activeObject:components.objects[index]})
    }

    function toggleActiveStyles(index:any){
        if(pageNum.objects[index] === pageNum.activeObject){
            return " w-[42px] h-[42px] flex items-center justify-center font-[14px] bg-[#FFFFFF] text-[#000000] rounded-[10px] cursor-pointer"
        }else{
            return "w-[42px] h-[42px] flex items-center justify-center font-[14px] text-[#777777] cursor-pointer"
        }
    }

  return (
    <div className="w-9/12 h-[165vh] flex flex-col justify-around mx-auto text-[#000000]">
        <div className="w-[500px]">
            <h1 className="font-poppins text-[36px] font-[600]">Modal Card Generator</h1>
            <p className="font-poppins font-[400] leading-[24px] text-[16px]">
                Measure your return on email marketing efforts easier and faster by using thebest online tools. Popupsmart is ready to help you build an efficient email list!
            </p>
        </div>
        <div className="w-full flex flex-col justify-between h-[75%]">
            <div className="flex justify-between items-center w-52">
                <div className="w-[36px] h-[36px] rounded-[36px] bg-[#EAEAEA] flex justify-center items-center">
                    <span className="font-[600] text-[16px] font-poppins">1</span>
                </div>
                <h4 className="font-[18px] font-[600]">Choose your template</h4>
            </div>
            <div className="grid grid-cols-4 gap-4">
                {components.activeComponents?.map((imag:any , index:number)=>{
                    return(
                        <div key={index} onClick={()=>selectModal(index)} className=" relative  w-[276px] h-[200px] group hover:bg-gradient-to-r from-[#7D4AEA99] to-[#7c51da92] bg-[#F5F5F5] rounded-[12px] border-[1px] border-[#EAEAEA] flex justify-center items-center">
                            <Image className="group-hover:opacity-10" src={imag.imgUrl} width={170} height={156} alt='sasas'/>
                            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                                <p className='text-center w-[165px] h-[50px] flex justify-center items-center rounded-lg bg-white text-[#7D4AEA] font-bold text-lg cursor-pointer'>Select</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="w-[132px] h-[48px] bg-[#F5F5F5] rounded-[12px] flex flex-row justify-around items-center">
                {pageNum.objects.map((sellected:any,index:number)=>{
                    return(
                        <div key={index} onClick={()=>toggleActiveObject(index)} className={toggleActiveStyles(index)}>{sellected.id}</div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}
