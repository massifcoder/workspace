import Image from "next/image"
import RecentFile from "./RecentFile"
import { useEffect, useState } from "react"

export default function Recent(){    
    const [files,setFiles] = useState([{name:'MonthlyReport',type:'docx',size:'18',modify:'1 month'},
    {name:'Report',type:'docx',size:'20',modify:'1 week'},
    {name:'Assignement',type:'docx',size:'16',modify:'2 month'}])


    useEffect(()=>{
        const token = localStorage.getItem('token');
        fetch('/api/word/storedFiles',{
            method:'POST',
            body:JSON.stringify({'token':token})
        }).then((res)=>{
            return res.json()
        }).then((res)=>{
            console.log(res.files)
            setFiles(res.files);
            return res;
        })
    },[])

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
                return <RecentFile files={files} setFiles={setFiles} key={index} value={value}/>
            })}
        </div>
    )
}