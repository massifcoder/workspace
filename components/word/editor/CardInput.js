import Image from "next/image"
import { useRef } from "react"

export default function CardInput(props){
    const inpref = useRef(null);
    const handleComment = () =>{
        let date = new Date();
        const options = { timeZone: 'Asia/Kolkata',day:'numeric', month:'short',year:'2-digit' };
        const indianDateTime = date.toLocaleString('en-US', options);
        let comt = inpref.current.value;
        let coment = {text:comt,time:indianDateTime,user:'Vishal Sharma'}
        props.setComment([...props.comments,coment]);
        props.addComit(false)
    }
    return (
        <div className="bg-white rounded-xl shadow shadow-2xl p-3">
            <div className="flex items-center">
                <div>
                    <Image height={25} alt="image" className="m-1" width={35} src={'/user.png'}/>
                </div>
                <div className=" m-1">
                    <div className="text-md">Vishal Sharma</div>
                </div>
            </div>
            <div className="text-md m-2">
                <input ref={inpref} type="text" className="p-1 h-fit px-4 rounded-full outline outline-1.5 outline-blue-400"/>
            </div>
            <div className="flex my-2">
                <div onClick={handleComment} className="rounded-full cursor-pointer mx-2 px-3 p-1 bg-[#c2e7ff] text-gray-700">Comment</div>
                <div onClick={()=>{props.addComit(false)}} className="rounded-full mx-2 text-blue-800 cursor-pointer outline outline-1 outline-gray-600 px-3 p-1 text-gray-700">Cancel</div>
            </div>
        </div>
    )
}