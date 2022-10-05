import React from 'react'
import Image from 'next/image'
import ss from '../public/images/Vector(3).svg'
import sss from '../public/images/reload.svg'
import ssss from '../public/images/Vector(4).svg'
export default function Conversions() {
  return (
    <div className="w-9/12 h-[80vh] flex flex-col justify-around mx-auto text-[#000000]">
        <h1 className='font-[600] text-[36px] font-poppins text-center'>Conversion & UX ready popups & modals</h1>
        <div className='flex flex-row gap-7'>
            <div className='w-[378px] p-10 h-[267px] bg-[#F5F5F5] rounded-[12px] flex flex-col justify-around items-center'>
                <Image src={ss}/>
                <h4 className='font-poppins text-[18px] font-[600]'>Pixel Perfect</h4>
                <span className='text-center'>Helps you calculate your email
marketing roi to measure success.</span>
            </div>
            <div className='w-[378px] p-10 h-[267px] bg-[#F5F5F5] rounded-[12px] flex flex-col justify-around items-center'>
                <Image src={sss}/>
                <h4 className='font-poppins text-[18px] font-[600]'>Conversion Ready</h4>
                <span  className='text-center'>Empowers your emails by
generating afree code for
a CTA in your subject line.</span>
            </div>
            <div className='w-[378px] p-10 h-[267px] bg-[#F5F5F5] rounded-[12px] flex flex-col justify-around items-center'>
                <Image src={ssss}/>
                <h4 className='font-poppins text-[18px] font-[600]'>Modern & Useful</h4>
                <span  className='text-center'>Enables you to estimate the
total profit of your investment
on a popup service.</span>
            </div>
        </div>
    </div>
  )
}
