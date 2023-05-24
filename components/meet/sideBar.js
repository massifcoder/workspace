import Image from "next/image"

export default function SideBar(){
    return (
        <div className="w-fit h-fit p-8">
            <div className="bg-white rounded-xl p-1 my-3 hover:scale-125 transition duration-200 ease-in-out">
                <Image src={'/meet/home.png'} width={50} height={50} />
            </div>
            <div className="bg-white rounded-xl p-1 my-3 hover:scale-125 transition duration-200 ease-in-out">
                <Image src={'/meet/calender.png'} width={50} height={50} />
            </div>
            <div className="bg-white rounded-xl p-2 my-3 hover:scale-125 transition duration-200 ease-in-out">
                <Image src={'/meet/bell.png'} width={40} height={40} />
            </div>
            <div className="bg-white rounded-xl p-1 transition duration-200 ease-in-out my-3 hover:scale-125">
                <Image src={'/meet/mail.png'} width={50} height={50} />
            </div>
            <div className="bg-white rounded-xl my-3 transition duration-200 ease-in-out p-2 hover:scale-125">
                <Image src={'/meet/setting.png'} width={40} height={40} />
            </div>
        </div>
    )
}