import React, { useState, useContext, useEffect } from 'react'
import Image from 'next/image'
import position from '../public/images/position.svg';
import color from '../public/images/colors.svg'
import log from '../public/images/log.svg';
import { FileUploader } from "react-drag-drop-files";
import SecondModal from './modalsComponents/SecondModal';
import { DataContext } from '../poviders/dataProvider';
import axios from 'axios';
export default function ModalView() {

  const { values, setValues } = useContext<any>(DataContext)
  const { components, setComponents } = useContext<any>(DataContext)
  const [size, setSize] = useState<any>({
    activeObject: null,
    objects: [{ id: 1, size: 'Small', sizeNum: 300 }, { id: 2, size: 'Medium', sizeNum: 400 }, { id: 3, size: 'Large', sizeNum: 500 }]
  })
  const { code } = useContext<any>(DataContext)
  const fileTypes = ["JPG", "PNG", "GIF"];
  const [position, setPosition] = useState<any>({
    activeObject: null,
    objects: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }]
  })
  const [color , setColor] = useState<any>({
    activeObject:null,
    objects:[{id:1,color:'#000000'} ,{id:2 , color:'#F37C34'} , {id:3,color:'#7D4AEA'} , {id:4 , color:'#7777'} , {id:5 , color:'#FFFFFF'}]
  })



  function toggleActiveObject(index: any) {
    setSize({ ...size, activeObject: size.objects[index] })
    setValues({ ...values, size: size.objects[index].sizeNum })
  }

  useEffect(() => {

    setSize({ ...size, activeObject: size.objects[0] })
    setValues({ ...values, size: size.objects[0].sizeNum })

  }, [])

  

  function toggleActiveStyles(index: any) {
    if (size.objects[index] === size.activeObject) {
      return " w-[95px] h-[42px] flex items-center justify-center font-[14px] bg-[#FFFFFF] text-[#000000] rounded-[10px] cursor-pointer"
    } else {
      return "w-[95px] h-[42px] flex items-center justify-center font-[14px] text-[#777777] cursor-pointer"
    }
  }

  function getPosition(index: any) {
    setPosition({ ...position, activeObject: position.objects[index] })
    if (index === 0) {
      setValues({ ...values, position: 'absolute left-0 top-0' })
    } if (index === 1) {
      setValues({ ...values, position: 'absolute left-0 right-0 mx-auto top-0' })
    } if (index === 2) {
      setValues({ ...values, position: 'absolute right-0 top-0' })
    }
    if (index === 3) {
      setValues({ ...values, position: 'absolute left-0 top-0 bottom-0 my-auto' })
    }
    if (index === 4) {
      setValues({ ...values, position: 'absolute right-0 left-0 top-0 bottom-0 m-auto' })
    }
    if (index === 5) {
      setValues({ ...values, position: 'absolute right-0 top-0 bottom-0 my-auto' })
    }
    if (index === 6) {
      setValues({ ...values, position: 'absolute left-0 bottom-0' })
    }
    if (index === 7) {
      setValues({ ...values, position: 'absolute left-0 right-0 mx-auto bottom-0' })
    }
    if (index === 8) {
      setValues({ ...values, position: 'absolute right-0 bottom-0' })
    }
  }

  function toggleActiveClass(index: any) {
    if (position.objects[index] === position.activeObject) {
      return 'bg-[#7D4AEA]'
    }
  }

  function changeColor(index:any){
    if(index===0){
      setValues({...values , color:'#000000'})
    }
    if(index===1){
      setValues({...values , color:'#F37C34'})
    }
    if(index===2){
      setValues({...values , color:'#7D4AEA'})
    }
    if(index===3){
      setValues({...values , color:'#7777'})
    }
    if(index===4){
      setValues({...values , color:'#FFFF'})
    }
  }

  function uploadImage(event:any){
    const url = URL.createObjectURL(event.target.files[0])
    setValues({...values ,logo:url})
    console.log(values.logo)
  }



  return (
    <div className="w-9/12 h-[100vh] flex justify-between mx-auto text-[#000000]">
      <div className='w-[40%] h-full flex flex-col justify-around'>
        <div className="flex flex-row items-center">
          <div className="w-[36px] h-[36px] rounded-[36px] bg-[#EAEAEA] flex justify-center items-center">
            <span className="font-[600] text-[16px] font-poppins">2</span>
          </div>
          <h4 className="font-[18px] font-[600] ml-3">Appearance (Size, colors, logo)</h4>
        </div>
        <div className=' mt-6 flex flex-col justify-around h-[100px]'>
          <h5 className='font-[400] text-[14px]'>Size</h5>
          <div className=' h-12 flex flex-row justify-around items-center w-[257px] rounded-[12px] bg-[#F5F5F5]'>
            {size.objects.map((s: any, index: number) => {

              return (
                <div className={toggleActiveStyles(index)} onClick={() => toggleActiveObject(index)} key={index}>
                  <h5 className='text-[14px] font-[600]'>{s.size}</h5>
                </div>
              )

            })}
          </div>
        </div>
        <div className='flex flex-col justify-around items-start h-[100px]'>
          <h5 className='font-[400] text-[14px]'>Position</h5>
          <div className='w-[82px] h-[55px] rounded-[8px] flex flex-wrap gap-[2px]'>
            {position.objects.map((id: any, index: number) => {
              return (<div key={index} onClick={() => getPosition(index)} className={` w-[24px] h-[15px] border-[1px] ${toggleActiveClass(index)}`}></div>)
            })}
          </div>
        </div>
        
          <div className='w-[255px] h-[55px] flex flex-row justify-between items-center'>
            {color.objects.map((color:any , index:number)=>{
              return <div key={index} onClick={()=>changeColor(index)} className={`bg-[${color.color}] border-[1px] w-[42px] h-[42px] rounded-[8px]`}></div>
            })}
          </div>
        <div className='flex flex-col justify-around items-start h-[215px]'>
          <h5 className='font-[400] text-[14px]'>Upload Logo</h5>
          <div className='w-[378px] h-[178px] rounded-[12px] border-[#DDDDDD] border-[1px] border-dashed flex flex-col justify-around items-center'>
            <div className='flex justify-center items-center w-[80px] h-[80px] bg-bg-2 -z-10 rounded-[12px]'><Image className='z-10' src={log} width={50} height={50} /></div>
            <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" onChange={event =>uploadImage(event)}/>
          </div>
        </div>
      </div>
      <div className='w-[60%] rounded-[30px] relative bg-[#3333]'>
        {components.activeObject?.component}
      </div>
    </div>
  )
}
