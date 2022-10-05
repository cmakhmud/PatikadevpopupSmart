import React, { useState } from 'react'
import {AiOutlinePlusCircle ,AiOutlineMinusCircle} from 'react-icons/ai'
export default function FaqContent() {

    const [open , setOpen] = useState<any>()

    function toggleFaq(){
        setOpen(!open)
    }

  return (
    <div className={open?'w-full border-t-2 h-30 bg-[#F5F5F5] p-10 flex flex-col justify-between items-center':'w-full border-t-2 p-10 h-10 flex flex-col justify-between items-center'}>
        <div className='w-full h-full flex flex-row justify-between items-center'>
            <h5 className='font-[600] text-[18px] font-poppins'>How do I pay for the essentials or premium plan?</h5>
           { open?<AiOutlineMinusCircle onClick={toggleFaq} size={20}/>:<AiOutlinePlusCircle onClick={toggleFaq} size={20}/>}
        </div>
        <span className={open?'font-[400] text-[16px] font-poppins':'font-[400] text-[16px] font-poppins hidden'}>You can pay with a credit card or via net banking (if you’re in United States). We willrenew your subscription automatically at the end of every billing cycle. You can paywith a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle.</span>
    </div>
  )
}
