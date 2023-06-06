import Image from "next/image"
import Link from "next/link"

export default function Header() {
    return (
        <div className="font-mono flex justify-between items-center p-6 pb-2">
            <Image alt="kjh" src={'/meet/logo.png'} className="bg-white hover:scale-125 m-2 transition duration-500 ease-in-out" height={50} width={50} />
            <div className="flex items-center justify-between w-full px-6">
                <div className="text-black">
                    <div className="text-gray-400 text-sm hover:scale-125 transition duration-500 ease-in-out">Ongoing event</div>
                    <div className="text-xl text-white transition duration-500 ease-in-out hover:scale-125">
                        <Link href={'/meet'}>Nanda  .  Meet</Link>
                    </div>
                </div>
                <div className="flex items-center text-white w-[200px] justify-between">
                    <div className="h-fit hover:scale-110 transition duration-500 ease-in-out p-2 px-3 bg-[#6619d0] rounded-full">
                        02 : 25
                    </div>
                    <div className="h-fit px-3 flex hover:scale-110 transition duration-300 ease-in-out items-center p-2 bg-red-500 items-center rounded-full">
                        <div className="border border-4 bg-red-500 border-white h-4 w-4 mx-1 rounded-full"></div>
                        <div className="mx-2">REC</div>
                    </div>
                </div>
            </div>
        </div>
    )
}