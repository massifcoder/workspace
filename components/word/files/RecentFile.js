import Image from "next/image"
import Link from "next/link";
import { useState } from "react"

export default function RecentFile(props) {
    const [show, setShow] = useState(false)
    const setingShow = () => {
        setShow(!show);
    }
    return (
        <>
            <Link href={'/word/file'}>
                <div className="text-gray-500 cursor-pointer grid grid-cols-4 gap-4 mt-4 mb-2">
                    <div className="font-bold text-gray-600">{props.value.name}</div>
                    <div>{props.value.type}</div>
                    <div>{props.value.size}</div>
                    <div className="relative">
                        <div className="grid grid-cols-2 space-x-2">
                            <div>{props.value.modify}</div>
                            <div className="relative">
                                <Image alt="setting" onMouseDown={setingShow} src={'/temp/dot.png'} className="p-1" height={10} width={20} />
                                {show ? <div className="absolute flex flex-col space-y-2 text-center bg-white left-4 p-4 rounded-xl outline outline-1 outline-gray-400">
                                    <Link href={'/word/file'}>
                                        <h1 className="text-blue-500">Edit</h1>
                                    </Link>
                                    <hr />
                                    <h1 className="text-red-500">Delete</h1>
                                </div> : null}
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            <hr />
        </>
    )
}