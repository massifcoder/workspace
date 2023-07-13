import Image from "next/image"
import Link from "next/link";
import { useEffect, useState } from "react"

export default function RecentFile(props) {
    const [show, setShow] = useState(false)
    const [token,setToken] = useState();

    useEffect(()=>{
        const t = localStorage.getItem('token')
        setToken(t);
        console.log(t);
    },[])

    const setingShow = () => {
        setShow(!show);
    }

    const handleDelete = ()=>{
        const ar = props.files.filter(val => val!==props.value)
        props.setFiles(ar);
        fetch('/api/word/deleteFile',{
            method:'POST',
            body:JSON.stringify(
                {
                    token:token,
                    name:props.value.name
                }
            )
        })
    }

    return (
        <>
                <div className="text-gray-500 cursor-pointer grid grid-cols-4 gap-4 mt-4 mb-2">
                    <div className="font-bold text-gray-600"><Link href={`/word/file/${token}/${props.value.name}`}>{props.value.name}</Link></div>
                    <div>{props.value.type}</div>
                    <div>{props.value.size}KB</div>
                    <div className="relative">
                        <div className="grid grid-cols-2 space-x-2">
                            <div>{props.value.modify}</div>
                            <div className="relative">
                                <Image alt="setting" onMouseDown={setingShow} src={'/word/temp/dot.png'} className="p-1" height={10} width={20} />
                                {show ? <div className="absolute flex flex-col space-y-2 text-center bg-white left-4 p-4 rounded-xl outline outline-1 outline-gray-400">
                                    <Link href={`/word/file/${token}/${props.value.name}`}>
                                        <h1 className="text-blue-500">Edit</h1>
                                    </Link>
                                    <hr />
                                    <h1 onClick={handleDelete} className="text-red-500">Delete</h1>
                                </div> : null}
                            </div>
                        </div>
                    </div>
                </div>
            <hr />
        </>
    )
}