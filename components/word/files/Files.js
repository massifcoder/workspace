import Image from "next/image"
import Recent from "./Recent"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Files() {
    const [token,setToken] = useState('')

    useEffect(()=>{
        setToken(localStorage.getItem('token'));
    },[setToken]);

    if(token){

    return (
        <div className="w-1/2 px-4">
            <div className="flex justify-between py-6">
                <div className="text-2xl font-bold">My Document</div>
                <div className="flex space-x-6">
                    <label htmlFor="myfile">
                        <input type="file" id="myfile" className="hidden" name="myfile" multiple/>
                        <div className="p-2 px-3 cursor-pointer bg-gray-200 rounded-md flex items-center space-x-2">
                            <Image src={'/word/temp/upload.png'} height={20} width={20} alt="upload" />
                            <div>
                                Upload
                            </div>
                        </div>
                    </label>
                    <Link href={`/word/file/${token}`} className="p-2 px-3 flex items-center space-x-2 cursor-pointer bg-gray-200 rounded-md">
                        <Image src={'/word/temp/edit.png'} height={20} width={20} alt="upload" />
                        <div>Create</div>
                    </Link>
                </div>
            </div>
            <div className="flex justify-between w-fit mt-4 space-x-8">

                <Link href={`/word/file/${token}/file`}>
                    <Image src={'/word/temp/plus.png'} className="my-1 rounded-xl outline outline-blue-700 hover:outline-blue-700" alt='plus' width={150} height={200} />
                    <h1>Blank</h1>
                </Link>
                <Link href={`/word/file/${token}/resume`}>
                    <Image src={'/word/temp/resume.png'} alt='plus' className="mt-1 rounded-xl outline outline-gray-200 hover:outline-blue-700" width={150} height={200} />
                    <h1>Resume</h1>
                    <p className="text-sm text-gray-500">Serif</p>
                </Link>
                <Link href={`/word/file/${token}/letter`}>
                    <Image src={'/word/temp/letter.png'} alt='plus' width={150} className="mt-1 rounded-xl outline outline-gray-200 hover:outline-blue-700" height={200} />
                    <h1>Letter</h1>
                    <p className="text-sm text-gray-500">Spearmint</p>
                </Link>
                <Link href={`/word/file/${token}/profession`}>
                    <Image src={'/word/temp/proposal.png'} alt='plus' width={150} className="mt-1 rounded-xl outline outline-gray-200 hover:outline-blue-700" height={200} />
                    <h1>Project Professional</h1>
                    <p className="text-sm text-gray-500">Tropic</p>
                </Link>
            </div>
            <Recent />
        </div>
    )
    }

    else{
        return (
            <div>Loading...</div>
        )
    }

}