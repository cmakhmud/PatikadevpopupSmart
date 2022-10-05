import React , {useState}from 'react'
import Image from 'next/image';
import { FileUploader } from "react-drag-drop-files";
import log from '../public/images/log.svg'
export default function ContentModal() {

    const fileTypes = ["JPG", "PNG", "GIF"];

  return (
    <div className="w-9/12 h-[90vh] flex flex-col justify-between mx-auto text-[#000000]">
        <div className="flex flex-row items-center">
            <div className="w-[36px] h-[36px] rounded-[36px] bg-[#EAEAEA] flex justify-center items-center">
              <span className="font-[600] text-[16px] font-poppins">3</span>
            </div>
            <h4 className="font-[18px] font-[600] ml-3">Content</h4>
        </div>
        <div className='flex flex-col justify-around items-start h-[250px]'>
          <h5 className='font-[400] text-[14px]'>Edit Your Content</h5>
          <input /* value='Sign up' */ className='w-[378px] h-[36px] pl-2 border-[1px] rounded-[8px] text-[14px] border-[#DDDDDD]' />
          <input /* value='Enter Your Email' */ className='w-[378px] h-[36px] pl-2 border-[1px] text-[14px] rounded-[8px] border-[#DDDDDD]' />
          <input /* value='Sign up' */ className='w-[378px] h-[36px] pl-2 border-[1px] text-[14px] rounded-[8px] border-[#DDDDDD]' />
          <input /* value='By singning up, you agree to Privacy Policy' */ className='w-[378px] h-[36px] text-[14px] pl-2 border-[1px] rounded-[8px] border-[#DDDDDD]' />
        </div>
        <div className='flex flex-col justify-around items-start h-[215px]'>
          <h5 className='font-[400] text-[14px]'>Upload Logo</h5>
          <div className='w-[378px] h-[178px] rounded-[12px] border-[#DDDDDD] border-[1px] border-dashed flex flex-col justify-around items-center'>
            <div className='flex justify-center items-center w-[80px] h-[80px] bg-bg-2 -z-10 rounded-[12px]'><Image className='z-10' src={log} width={50} height={50}/></div>
            <FileUploader label='Drop your image here or upload' name="file" types={fileTypes} />
          </div>
        </div>
    </div>
  )
}
