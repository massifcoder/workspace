import { useRef, useState } from "react";
import Image from "next/image";

export default function Chat() {

    const msgInpt = useRef();
    const chatArea = useRef();
    const [showChat,setChat] = useState(true);
    const [messages,setMessage] = useState([]);
    const [readon,setReadOn] = useState(false)
    const sendMsg = async () =>{
        let question = msgInpt.current.value;
        msgInpt.current.value = "Loading answer..."
        setReadOn(true)
        if(question){
            messages.push(question)
            await fetch('/api/word/chating',{method:'POST',body:JSON.stringify({'prompt':question})}).then((response)=>{
                return response.json()
            }).then((response)=>{
                setMessage([...messages,response.text])
                return response
            })
        }
        else{
            msgInpt.current.value = 'Enter question!!!'
        }
        setReadOn(false)
        msgInpt.current.value = ''
    }

    const handleEnterKey = (event) =>{
        if(event.keyCode===13){
            sendMsg();
        }
    }

    return (
        <div className="relative p-2 print:hidden m-1 shadow-2xl rounded-2xl my-2 outline outline-1 outline-gray-300">
            <div  onClick={ ()=>{setChat(!showChat)}} className="bg-white select-none outline outline-1 outline-gray-300 shadow-xl p-3 rounded-2xl flex">
                <Image src={'/word/asd.webp'} alt="asd" height={50} width={50} className="mx-2"/>
                <div className="text-gray-600">
                    <div className="text-xl">{localStorage.getItem('fname')}</div>
                    <div className="text-xs">This is AI built chatbot.</div>
                </div>
                <div className="bg-gray-200 mt-2 ml-6 rounded-full border-1 h-full w-fit">
                    <Image src={ showChat ? '/word/drop.png' : '/word/cross.png' } alt="cross" height={20} width={20}/>
                </div>
            </div>
            <div ref={chatArea} className={`my-2 p-3 ${showChat ? 'hidden' : ''} rounded-2xl h-60 flex flex-col overflow-auto`}>
                {messages.map((value,index)=>{
                    if(index%2==0){
                        return <div key={index} className="my-1 bg-[#776bfa] w-fit p-2 px-4 self-end rounded-2xl text-white">{value}</div>
                    }
                    return <div key={index} className="bg-gray-100 outline outline-1 outline-gray-300 my-1 w-fit p-2 px-4 rounded-2xl self-start text-gray-700">{value}</div>
                })}
            </div>
            <div className={`my-1 bg-white ${showChat ? 'hidden': ''} outline outline-1 outline-gray-300 p-1.5 rounded-2xl shadow-2xl h-16 flex justify-center items-center`}>
                <div className="bg-gray-100 outline outline-1 h-12 outline-gray-300 items-center p-1.5 rounded-2xl flex w-full">
                    <input readOnly={readon} ref={msgInpt} onKeyDown={handleEnterKey} type="text" placeholder="Type here..." className="bg-transparent px-2 outline outline-0"/>
                    <div onMouseDown={sendMsg}>
                        <Image src={'/word/send.png'} height={40} width={40} alt="send"/>
                    </div>
                </div>
            </div>
        </div>
    )
}