import React from 'react'
import Image from 'next/image'
import shoose from '../../public/images/shoose.svg'
export default function FirstModal() {
  return (
    <div className='w-[625px] h-[405px] flex bg-white shadow-2xl rounded-[30px]'>
        <div className='flex-1 h-[75%] my-auto flex flex-col justify-around '>
            <div className='text-center'>
                <h1 className='text-[30px] font-poppins font-[600]'>Sign up</h1>
                <h3 className='text-[16px] font-poppins font-[400]'>Join new adventure</h3>
            </div>
            <div className='h-[170px] flex flex-col justify-between items-center'>
                <input className='w-[260px] h-[44px] bg-[#FFFF] border-[1px] border-[#DDDDDD] rounded-[8px]'/>
                <input className='w-[260px] h-[44px] bg-[#FFFF] border-[1px] border-[#DDDDDD] rounded-[8px]'/>
                <button className='w-[260px] h-[44px] bg-[#F37C34] border-[1px] rounded-[8px]'><span className='text-[14px] font-poppins font-[600] text-[#FFFF]'>Sign up</span></button>
                <h5 className='mr-12 font-poppins text-[10px] font-[500] text-[#777777]'>By signing up, you agree to  Privacy Policy</h5>
            </div>
            
        </div>
        <div className='flex-1'>
            <Image className='rounded-r-[30px] w-full object-cover' src={shoose} height={467}/>
        </div>
    </div>
  )
}
