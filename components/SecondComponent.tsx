import AbsoluteComponent from "./AbsoluteComponent"

export default function SecondComponent() {
  return (
    <div className="w-full h-[610px] bg-[#666666] flex justify-center items-end relative">
        
        <div className=" w-9/12 mb-24 flex flex-row justify-between items-center">
            <AbsoluteComponent/>
            <div className=" w-[25%] flex flex-col justify-between text-[#FFFF]"> 
                <span className="text-[72px] font-[600] font-poppins">3x</span>
                <span className="text-[16px] w-[75%] font-[500]">Increase Conversion Rate</span>
            </div>
            <div className=" w-[25%] flex flex-col justify-between text-[#FFFF]">
                <span className="text-[72px] font-[600] font-poppins">120%</span>
                <span className="text-[16px] w-[50%] font-[500]">Email Subscribers</span>
            </div>
            <div className=" w-[25%] flex flex-col justify-between text-[#FFFF]">
                <span className="text-[72px] font-[600] font-poppins">390%</span>
                <span className="text-[16px] w-[75%] font-[500]">More Customer Engagement</span>
            </div>
            <span className="text-[#FFFF] leading-10 text-[36px] font-[600] w-[370px] font-poppins">
                Popupsmart meets all your business needs.
            </span>
        </div>
    </div>
  )
}
