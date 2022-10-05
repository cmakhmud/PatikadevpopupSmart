import React , {useState , useContext}from 'react'
import { DataContext } from '../poviders/dataProvider';
// import CopyToClipboard from "react-copy-to-clipboard";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
export default function SettingsVsCode() {

    const {code} = useContext<any>(DataContext) 
    const [codes , setCodes] = useState()

    function getCode() {
        const formData = new FormData()
        formData.append('code',code)
        return fetch('https://popup-api.demo-service.tk', {
          method: "POST",
          body: formData
        })
          .then(response => response.json())
          .catch(err => console.log(err));
    
      }

  return (
    <div className="w-9/12 h-[100vh] flex flex-col justify-around mx-auto text-[#000000]">
        <div className="flex flex-row items-center">
            <div className="w-[36px] h-[36px] rounded-[36px] bg-[#EAEAEA] flex justify-center items-center">
              <span className="font-[600] text-[16px] font-poppins">5</span>
            </div>
            <h4 className="font-[18px] font-[600] ml-3">Settings and Code</h4>
        </div>
        <h1 className='font-poppins font-[600] text-[18px]'>Webhook to Send data</h1>
        <div className='h-[150px] flex flex-col justify-around'>
            <div>
                <h5 className='font-poppins text-[14px] font-[400]'>Enter youe Webhook URL</h5>
                <h5 className='font-poppins text-[14px] font-[400]'>You can  create a simple one with make.com</h5>
            </div>
            <input className='w-[370px] h-[36px] border-[#DDDDDD] border-[1px] rounded-[8px] pl-4' placeholder='Your Webhook Url'/>
            <div>
                <div className='flex flex-row justify-around items-center w-[200px]'>
                    <input type='checkbox'/>
                    <label className='font-poppins text-[14px] font-[400]'>Send form submissions</label>
                </div>
                <div className='flex flex-row justify-around items-center w-[200px]'>
                    <input type='checkbox'/>
                    <label  className='font-poppins text-[14px] font-[400]'>Send form submissions</label>
                </div>
            </div>
            
        </div>
        <button onClick={()=>getCode().then(response=>{setCodes(response.code)})} className='bg-[#7D4AEA] w-[184px] h-[60px] text-[18px] text-[#FFFF] font-[400] rounded-[12px]'>Get your Code</button>
        <div className='w-[378px] h-[260px] bg-[#333333] rounded-[8px] p-5'><span className='text-white'>{codes}</span></div>
        <span>Copy and paste the embed code above just before the closing body tag of your website template file.</span>
    </div>
  )
}
