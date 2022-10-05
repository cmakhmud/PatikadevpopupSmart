import React from 'react'
import Image from 'next/image'
import s from '../public/images/ooooo.svg'
import ss from '../public/images/oo.svg'
import sss from '../public/images/ooo.svg'
import ssss from '../public/images/o.svg'
import sssss from '../public/images/popupSmart.svg'
export default function BuildPopUps() {
  return (
    <div className="w-9/12 h-[80vh] flex flex-col justify-around mx-auto text-[#000000]">
        <h1 className='font-[600] text-[36px] font-poppins text-center'>Build great popups without code</h1>
        <div className='w-full flex flex-row justify-between items-center'>
            <div className=' w-[250px] h-52 flex flex-col justify-between items-center'>
                <div className='w-[120px] h-[120px] bg-[#7D4AEA] rounded-[100%] flex justify-center items-center'>
                    <Image src={s} objectFit='contain'/>
                </div>
                <h5 className='text-[18px] font-[600] font-poppins text-center'>Targeting Options</h5>
                <h5 className='font-[400] text-[14px] font-poppins text-center'>Target +26 trigger to your visitors</h5>
            </div>
            <div className=' w-[250px] h-52 flex flex-col justify-between items-center'>
                <div className='w-[120px] h-[120px] bg-[#7D4AEA] rounded-[100%] flex justify-center items-center'>
                    <Image src={ss} objectFit='contain'/>
                </div>
                <div><h5 className='text-[18px] font-[600] font-poppins text-center'>No-Code</h5>
                <h5 className='font-[400] text-[14px] font-poppins text-center'>No code required while
you’re creating a popup</h5></div>
            </div>
            <div className=' w-[250px] h-52 flex flex-col justify-between items-center'>
                <div className='w-[120px] h-[120px] bg-[#7D4AEA] rounded-[100%] flex justify-center items-center'>
                    <Image src={sss} objectFit='contain'/>
                </div>
                <h5 className='text-[18px] font-[600] font-poppins text-center'>Targeting Options</h5>
                <h5 className='font-[400] text-[14px] font-poppins text-center'>Integrated with your marketing
and CRM platforms</h5>
            </div>
            <div className=' w-[250px] h-52 flex flex-col justify-between items-center'>
                <div className='w-[120px] h-[120px] bg-[#7D4AEA] rounded-[100%] flex justify-center items-center'>
                    <Image src={ssss} objectFit='contain'/>
                </div>
                <h5 className='text-[18px] font-[600] font-poppins text-center'>Targeting Options</h5>
                <h5 className='font-[400] text-[14px] font-poppins text-center'>Don’t worry about speed and
Amazon AWS resources</h5>
            </div>
        </div>
        <div className='flex flex-col justify-between items-center'>
            <Image src={sssss}/>
            <span>Powered by Popupsmart</span>
        </div>
        
    </div>
  )
}
