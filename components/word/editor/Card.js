import Image from "next/image"

export default function Card(props){
    return (
        <div className="bg-[#e7edf8] rounded-xl p-2 mt-2">
            <div className="flex">
                <div>
                    <Image height={35} alt="image" className="m-1" width={35} src={'/user.png'}/>
                </div>
                <div className=" m-1">
                    <div className="text-md">{props.comment.user}</div>
                    <div className="text-xs">{props.comment.time}</div>
                </div>
            </div>
            <div className="text-md mx-3">
                {props.comment.text}
            </div>
        </div>
    )
}