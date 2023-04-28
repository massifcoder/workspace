import Image from "next/image"

export default function Card(){
    return (
        <div className="bg-[#e7edf8] rounded-xl p-2 mt-2">
            <div className="flex">
                <div>
                    <Image height={35} alt="image" className="m-1" width={35} src={'/user.png'}/>
                </div>
                <div className=" m-1">
                    <div className="text-md">Vishal Sharma</div>
                    <div className="text-xs">7:42pm</div>
                </div>
            </div>
            <div className="text-md mx-3">
                Comment will be here.
            </div>
        </div>
    )
}