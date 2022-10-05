import React from 'react'
import Toggle from './toggle'
import {MdScreenSearchDesktop} from 'react-icons/md'
export default function TargetingRules() {
  return (
    <div className="w-9/12 h-[100vh] flex flex-col justify-around mx-auto text-[#000000]">
        <div className="flex flex-row items-center">
            <div className="w-[36px] h-[36px] rounded-[36px] bg-[#EAEAEA] flex justify-center items-center">
              <span className="font-[600] text-[16px] font-poppins">4</span>
            </div>
            <h4 className="font-[18px] font-[600] ml-3">Targeting Rules</h4>
        </div>
        <div className='h-[90px] flex flex-col justify-between'>
          <div className='flex flex-row justify-between w-[370px]'>
            <h5>Visitor Device</h5>
            <Toggle/>
          </div>
          <div className='flex flex-row justify-between  w-[370px]'>
            <button className='flex flex-row justify-around px-10 items-center w-[179px] h-[48px] bg-[#F5F5F5] rounded-[12px] text-[#000000] text-[14px] font-[400]'><input type='checkbox' className=' bg-[#7D4AEA]'/><MdScreenSearchDesktop color='#7D4AEA'/>Desktop</button>
            <button className='flex flex-row justify-around px-10 items-center w-[179px] h-[48px] bg-[#F5F5F5] rounded-[12px] text-[#000000] text-[14px] font-[400]'><input type='checkbox' className=' bg-[#7D4AEA]'/><MdScreenSearchDesktop color='#7D4AEA'/>Mobile</button>
          </div>
        </div>
        
        <div className='h-[75px] flex flex-col justify-between'>
          <div className='flex flex-row justify-between w-[370px]'>
            <h5>After X seconds</h5>
            <Toggle/>
          </div>
          <input className='w-[370px] h-[36px] border-[#DDDDDD] border-[1px] rounded-[8px]' />
        </div>
        <div className='h-[75px] flex flex-col justify-between'>
          <div className='flex flex-row justify-between w-[370px]'>
            <h5>After X seconds</h5>
            <Toggle/>
          </div>
          <input className='w-[370px] h-[36px] border-[#DDDDDD] border-[1px] rounded-[8px]' />
        </div>
        <div className='h-[75px] flex flex-col justify-between'>
          <div className='flex flex-row justify-between w-[370px]'>
            <h5>After X seconds</h5>
            <Toggle/>
          </div>
          <input className='w-[370px] h-[36px] border-[#DDDDDD] border-[1px] rounded-[8px]' />
        </div>
        
       
        
    </div>
  )
}
