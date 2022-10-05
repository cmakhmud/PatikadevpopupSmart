import Image from "next/image"
import camper from '../public/images/Vector.svg'
import abimg from '../public/images/image 1.svg'
import vector from '../public/images/Vector(1).svg'
import vector2 from '../public/images/Vector(2).svg'
export default function AbsoluteComponent() {
  return (
    <div className="w-[800px] h-[468px] rounded-[40px] flex -top-60 bg-[#FFFF] absolute">
        <div className="flex-1 flex flex-col justify-around py-[20px] items-center">
            <Image src={camper}/>
            <span className="text-[40px] font-[600] font-poppins">Join the club</span>
            <span className="text-[18px] font-[600] font-poppins w-72 text-center">Subscribe and Get an Extra 25% Off on your first purchase.</span>
            <div className="flex flex-col h-28 justify-between">
                <input placeholder="Email address" className="w-[300px] h-[48px] rounded-[12px] border-[#BBBBBB] border-[1px]"/>
                <button className="text-[#FFFF] font-[600] text-[16px] w-[300px] h-[48px] bg-[#000000] rounded-[12px]">Subscribe</button>
            </div>
            <span className="w-72 text-[400] text-[12px] text-[#7777]">By signing up, you agree to  Privacy Policy and Terms of Use.</span>
        </div>
        <div className="flex-1 rounded-tr-[40px] relative">
            <Image src={abimg} className='rounded-tr-[40px]'/>
            <div className="absolute w-[182px] h-[48px] bg-[#FFFF] rounded-[12px] top-20 -right-32 flex flex-row justify-around items-center">
                <Image src={vector}/>
                <span className="text-[16px] font-[500] font-poppins">Grow email list</span>
            </div>
            <div className="absolute w-[269px] h-[48px] bg-[#FFFF] rounded-[12px] top-36 -right-48 flex flex-row justify-around items-center">
                <Image src={vector2}/>
                <span className="text-[16px] font-[500] font-poppins">Increase sales conversion</span>
            </div>
            <span className="absolute w-48 bottom-2 left-24 text-[#FFFF] font-poppins text-[36px] font-[600] leading-[40px]">Mediterranean Sneakers®</span>
        </div> 
    </div>
  )
}
