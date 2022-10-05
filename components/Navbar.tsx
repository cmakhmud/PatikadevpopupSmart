import Image from "next/image"
import logo from '../public/images/logo.svg';
export default function Navbar() {
  return (
    <div className="w-9/12 mx-auto h-14 flex justify-between content-center">
        <div className="w-full flex justify-between items-center">
            <div className="w-2/3 flex justify-between items-center">
                <div className="h-full w-[135px] flex items-center justify-between text-[rgba(0, 0, 0, 1)] font-[16px] font-bold">
                    <Image src={logo} objectFit='contain' width={36} height={36}/>
                    <h5>modal.cards</h5>
                </div>
                <div className="w-3/5 mx-auto flex justify-between items-center font-[500]">
                    <a>Solutions</a>
                    <a>Product Tour</a>
                    <a>Showcase</a>
                    <a>Pricing</a>
                </div>
            </div>
            <div className=" w-[180px] flex justify-between items-center font-[500]">
                <a>Sign in</a>
                <div className="w-[121px] h-[36px] rounded-lg text-[#FFFF] bg-[#7D4AEA] flex justify-center items-center">
                    <a>Try for free</a>
                </div>
            </div>
        </div>
    </div>
  )
}
