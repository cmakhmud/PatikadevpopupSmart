import Image from 'next/image'
import { useContext , useEffect , useRef } from 'react'
import { DataContext } from '../../poviders/dataProvider'
import starrec from '../../public/images/starRec.svg'



export default function SecondModal() {
    const {values} = useContext<any>(DataContext)
    const {code ,setCode} = useContext<any>(DataContext)
    const devRef = useRef<any>()
    useEffect(()=>{
        toglleSmallLargeStyle()
        setCode(devRef.current.outerHTML)
    })
    function toglleSmallLargeStyle(){
        if(values.size===300){
            return 'w-[20%] h-[20%] rounded-[50%] bg-[#7D4AEA] flex justify-center items-center'
        }
        if(values.size===400){
            return 'w-[20%] h-[20%] rounded-[50%] bg-[#7D4AEA] flex justify-center items-center'
        }
        if(values.size===500){
            return 'w-[20%] h-[20%] rounded-[50%] bg-[#7D4AEA] flex justify-center items-center'
        }
    }

  return (
    <div ref={devRef} className={`w-[${values.size}px] h-[${values.size}px] ${values.position} py-2 h-[446px] bg-[#FFFF] shadow-2xl rounded-[30px] flex flex-col justify-around items-center`}>
        <div className={toglleSmallLargeStyle()}>
            <Image className='rounded-[50%]' src={values.logo?values.logo:starrec} width='50' height='50' objectFit='cover'/>
        </div>
        <h1 className='text-[30px] font-[700] text-[#000000]'>Security Code</h1>
        <h3 className='text-[20px] font-[400] text-[#000000]'>This code expires in 24 hours</h3>
        <div className='w-[90%] h-[120px] flex flex-col justify-between items-center'>
            <input className='w-full h-[47px] bg-[#FFFF] border-[1px] border-[#D2DAE3] rounded-[8px]'/>
            <div className='w-full flex justify-between'>
                <button className='w-[45%] h-[47px] border-[#D2DAE3] border-[1px] rounded-[8px] text-[16px] font-[500] text-[#000000]'>Cancel</button>
                <button className={`w-[45%] h-[47px] bg-[${values.color}] border-[#D2DAE3] border-[1px] rounded-[8px] text-[16px] font-[500] text-[#FFFF]`}>Continue</button>
            </div>
        </div>
    </div>
  )
}
