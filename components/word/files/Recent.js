import Image from "next/image"
import RecentFile from "./RecentFile"
import { useState } from "react"

export default function Recent(){
    const [files,setFiles] = useState([{name:'MonthlyReport',type:'docx',size:'18KB',modify:'1 month'},
    {name:'Report',type:'docx',size:'20KB',modify:'1 week'},
    {name:'Assignement',type:'docx',size:'16KB',modify:'2 month'}])
    return (
        <div className="w-full mt-6">
            <h1 className="font-bold text-xl">All Files</h1>
            <div className="text-gray-500 grid grid-cols-4 gap-4 mt-4 mb-2">
                <div>Name</div>
                <div>Type</div>
                <div>File Size</div>
                <div>Last Modified</div>
            </div>
            <hr/>
            {files.map((value,index)=>{
                return <RecentFile key={index} value={value}/>
            })}
        </div>
    )
}