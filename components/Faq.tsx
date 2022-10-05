import React, { useState } from 'react'
import FaqContent from './faqContent'
export default function Faq() {

  const [active, setActive] = useState('')

  return (
    <div className="w-9/12 h-[140vh] flex flex-col justify-around mx-auto text-[#000000]">
        <h1 className='font-[600] text-[36px] font-poppins text-center'>Frequently Asked Questions</h1>
        <div className='flex flex-col justify-between h-[110vh]'>
          <FaqContent/>
          <FaqContent/>
          <FaqContent/>
          <FaqContent/>
          <FaqContent/>
          <FaqContent/>
        </div>
    </div>
  )
}
