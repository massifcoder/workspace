import Image from "next/image"
import { useRef, useState } from "react"

export default function Compose(props) {
    const toRef = useRef();
    const ccRef = useRef();
    const bccRef = useRef();
    const subRef = useRef();
    const sendRef = useRef();
    const bodRef = useRef();
    const [selectedFiles, setSelectedFiles] = useState([]);
    const sendMail = async () => {
        sendRef.current.innerHTML = '<svg class="animate-spin h-5 w-5 mr-3 bg-white border border-2 rounded-md border-blue-800" viewBox="0 0 24 24"></svg>Sending'
        const toMail = toRef.current.value;
        const ccMail = ccRef.current.value;
        const bccMail = bccRef.current.value;
        const subMail = subRef.current.value;
        const bodMail = bodRef.current.value;
        const sender = localStorage.getItem('fname');
        const senderMail = localStorage.getItem('username');
        const formatted_text = bodMail.replace('\n', '\n<br>')
        const mail = { heading: subMail, description: formatted_text, attachments: selectedFiles, sender: sender, senderMail: senderMail , receiver: [toMail, ccMail, bccMail] }
        await fetch('/api/mail/sendMail', { method: 'POST', body: JSON.stringify(mail) })
            .then((resp) => {
                sendRef.current.innerHTML = 'Sent'
                props.setShowCompose(false);
                return resp
            });
    }
    const handleFileChange = (event) => {
        const files = event.target.files;
        const info = {name:files[0].name,type:files[0].type,size:files[0].size};
        setSelectedFiles([...selectedFiles,info]);
    }
    return (
        <div className="absolute bg-white outline outline-2 outline-[#1d4ed8] rounded-xl right-10 m-4 top-40">
            <div className="bg-[#1d4ed8] w-full items-center p-2 flex justify-between rounded-t-xl px-4 text-white font-bold">
                <div>Compose Mail</div>
                <div className="cursor-pointer p-1" onClick={() => { props.setShowCompose(false) }}>
                    <Image src={'/mail/wcross.png'} width={25} height={25} alt='cross' />
                </div>
            </div>
            <div className="flex p-2 px-4 w-full">
                <div className="text-gray-600">
                    TO:
                </div>
                <div className="mx-2 w-full">
                    <input ref={toRef} type="text" className="w-full text-gray-800 outline outline-0" />
                </div>
            </div>
            <hr />
            <div className="flex p-2 px-4 w-full">
                <div className="text-gray-600">
                    CC:
                </div>
                <div className="mx-2 w-full">
                    <input ref={ccRef} type="text" className="w-full text-gray-800 outline outline-0" />
                </div>
            </div>
            <hr />
            <div className="flex p-2 px-4 w-full">
                <div className="text-gray-600">
                    BCC:
                </div>
                <div className="mx-2 w-full">
                    <input ref={bccRef} type="text" className="w-full text-gray-800 outline outline-0" />
                </div>
            </div>
            <hr />
            <div className="flex p-2 px-4 w-full">
                <div className="text-gray-600">
                    Subject:
                </div>
                <div className="mx-2 w-full">
                    <input ref={subRef} type="text" className="w-full text-gray-800 outline outline-0" />
                </div>
            </div>
            <hr />
            <div className="p-2 w-full px-4">
                <textarea ref={bodRef} className="w-full resize-none min-w-[500px] text-gray-800 h-[200px] outline outline-0" />
                {selectedFiles.map((value, index) => {
                    return <p key={index}>{value.name}</p>
                })}
            </div>
            <hr />
            <div className="flex justify-between">
                <div className="">
                    <label id="fil" name='fil'>
                        <div className="bg-gray-300 select-none cursor-pointer p-2 mx-4 m-2 rounded-full text-gray-700">

                            @ Attachments
                            <input id="fil" onChange={handleFileChange} type="file" className="hidden" />

                        </div>
                    </label>
                </div>
                <div className="w-2/3 flex justify-between px-12">
                    <div ref={sendRef} onClick={sendMail} className="m-2 flex cursor-pointer p-2 bg-[#1d4ed8] rounded-md px-4 text-white">Send</div>
                    <div className="m-2 p-2 cursor-pointer bg-[#1d4ed8] rounded-md px-4 text-white" onClick={() => { props.setShowCompose(false) }}>Cancel</div>
                </div>
            </div>
        </div>
    )
}