import Navbar from "./Navbar"
import {AiOutlineCheck} from 'react-icons/ai'
export default function FirstCnent() {
  return (
    <div className="w-full h-[910px] bg-gradient-to-t flex flex-col justify-between from-[#E3F2F6] to-[#FFFF] font-inter">
        <Navbar/>
        <div className="w-9/12 h-full mx-auto flex flex-col justify-between">
            <div className="w-full mt-20 h-[60%] flex flex-col justify-around">
                <div className="h-[50%]">
                    <h1 className=" font-poppins text-[72px] leading-[80px] font-[600] w-3/5">Simple modal card creator</h1>
                    <span className="text-[30px] font-[400] font-poppins">
                    A utility-first CSS framework packed with classeslike flex, pt-4, text-center and rotate-90 that can becomposed to build any design, directly in your markup.
                    </span>
                </div>

                <div className="h-[120px] mt-12 flex flex-col justify-between">
                    <button className="w-[171px] h-[60px] bg-[#7D4AEA] rounded-xl font-[18px] text-[#FFFF]">
                        Try it out now
                    </button>
                    <div className="flex w-1/2 text-[13px] font-poppins justify-between items-center">
                        <div className=" w-36 flex flex-row items-center">
                            <AiOutlineCheck color='#000000' size={14}/>
                            <span className="ml-3">Free and paid plans</span>
                        </div>
                        <div className=" w-36 font-poppins text-[13px]  flex flex-row items-center">
                            <AiOutlineCheck color='#000000' size={14}/>
                            <span className="ml-3">Setup in minutes</span>
                        </div>
                        <div className=" text-[13px] font-poppins flex flex-row items-center">
                            <AiOutlineCheck color='#000000' size={14}/>
                            <span className="ml-3">No credit card required*</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}
