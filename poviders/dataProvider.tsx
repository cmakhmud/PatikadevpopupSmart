import { createContext, useState } from "react";
import EightModal from "../components/modalsComponents/EightModal";
import EleventhModal from "../components/modalsComponents/EleventhModal";
import FiftModal from "../components/modalsComponents/FifthModal";
import ForthMoal from "../components/modalsComponents/ForthMoal";
import Modal13 from "../components/modalsComponents/Modal13";
import Modal14 from "../components/modalsComponents/Modal14";
import Modal15 from "../components/modalsComponents/Modal15";
import Modal16 from "../components/modalsComponents/Modal16";
import NinethModal from "../components/modalsComponents/NinethModal";
import SecondModal from "../components/modalsComponents/SecondModal";
import SeventhModal from "../components/modalsComponents/seventhModal";
import SixthModal from "../components/modalsComponents/SixthModal";
import TenthModal from "../components/modalsComponents/TenthModal";
import ThirdModal from "../components/modalsComponents/ThirdModal";
import TwelfthModal from "../components/modalsComponents/TwelfthModal";
import * as ReactDOMServer from 'react-dom/server';

export const DataContext = createContext({});

export function DataProvider(props:any){

    const [code , setCode] = useState<any>()

    const [values , setValues] = useState<any>({
        size:'',
        position:'',
        color:'',
        logo:''
    })

    const [components , setComponents] = useState<any>({
        activeComponents:null,
        activeObject:null,
        objects:[
            {
                imgUrl:"/images/imgurl1.svg",
                id:1,
                component:<SecondModal/>,
            },
            {
                imgUrl:"/images/022.svg",
                id:2,
                component:<ThirdModal/>,
            },
            {
                imgUrl:"/images/031.svg",
                id:3,
                component:<ForthMoal/>,
                
            },
            {
                imgUrl:"/images/041.svg",
                id:4,
                component:<FiftModal/>,
                
            },
            {
                imgUrl:"/images/051.svg",
                id:5,
                component:<SixthModal/>,
                
            },
            {
                imgUrl:"/images/061.svg",
                id:6,
                component:<SeventhModal/>,
                
            },
            {
                imgUrl:"/images/071.svg",
                id:7,
                component:<EightModal/>,
                
            },
            {
                imgUrl:"/images/081.svg",
                id:8,
                component:<NinethModal/>,
                
            },
            {
                imgUrl:"/images/091.svg",
                id:9,
                component:<TenthModal/>,
                
            },
            {
                imgUrl:"/images/101.svg",
                id:10,
                component:<EleventhModal/>,
                
            },
            {
                imgUrl:"/images/111.svg",
                id:11,
                component:<TwelfthModal/>,
                
            },
            {
                imgUrl:"/images/121.svg",
                id:12,
                component:<Modal13/>,
                
            },
            {
                imgUrl:"/images/131.svg",
                id:13,
                component:<Modal14/>,
                
            },
            {
                imgUrl:"/images/141.svg",
                id:14,
                component:<Modal15/>,
                
            },
            {
                imgUrl:"/images/151.svg",
                id:15,
                component:<Modal16/>,
                
            },
           /*  {
                imgUrl:"/images/161.svg",
                id:16
            },
            {
                imgUrl:"/images/171.svg",
                id:17
            },
            {
                imgUrl:"/images/181.svg",
                id:18
            },
            {
                imgUrl:"/images/191.svg",
                id:19
            },
            {
                imgUrl:"/images/201.svg",
                id:20
            },
            {
                imgUrl:"/images/211.svg",
                id:21
            },
            {
                imgUrl:"/images/221.svg",
                id:22
            },
            {
                imgUrl:"/images/231.svg",
                id:23
            },
            {
                imgUrl:"/images/241.svg",
                id:24
            },
            {
                imgUrl:"/images/251.svg",
                id:25
            },
            {
                imgUrl:"/images/261.svg",
                id:26
            },
            {
                imgUrl:"/images/271.svg",
                id:27
            },
            {
                imgUrl:"/images/281.svg",
                id:28
            },
            {
                imgUrl:"/images/291.svg",
                id:29
            },
            {
                imgUrl:"/images/301.svg",
                id:30
            },
            {
                imgUrl:"/images/311.svg",
                id:31
            },
            {
                imgUrl:"/images/321.svg",
                id:32
            },
            {
                imgUrl:"/images/331.svg",
                id:33
            },
            {
                imgUrl:"/images/341.svg",
                id:34
            },
            {
                imgUrl:"/images/351.svg",
                id:35
            },
            {
                imgUrl:"/images/361.svg",
                id:36
            } */
        ]
    })

    return(
        <DataContext.Provider value={{values , setValues , components , setComponents , code ,setCode}}>
            {props.children}
        </DataContext.Provider>
    )

}