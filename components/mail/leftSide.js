import Image from "next/image"
import { useEffect, useState } from "react"
import Account from "../common/account"

export default function LeftSide(props) {
    const [showAccount, setShowAccount] = useState(false)
    const [fname,setFname] = useState('Loading...');
    const [userName,setUserName] = useState('Loading...');
    useEffect(()=>{
        const fnam = localStorage.getItem('fname')
        const userNam = localStorage.getItem('username');
        setFname(fnam);
        setUserName(userNam);
    })
    return (
        <div className="w-1/4 h-fit p-8 cursor-pointer rounded-l-2xl bg-[#f4f6f8]">
            <div className="flex items-center">
                <div onMouseLeave={() => { setShowAccount(false) }} className="relative">
                    <Image onMouseDown={() => { setShowAccount(!showAccount) }} src='/word/asd.webp' alt="user" width={45} height={45} />
                    {showAccount ? <Account ty={true}/> : null}
                </div>
                <div className="mx-6 text-gray-800">
                    <h1 className="text-xl font-bold">{fname}</h1>
                    <p>{userName}</p>
                </div>
                <div>
                    <Image alt="dot" src={'/mail/dots.png'} width={20} height={20} />
                </div>
            </div>
            <div className="items-center flex flex-col">
                <div className="flex items-center px-12 py-8">
                    <div onClick={()=>{props.setShowCompose(!props.showCompose)}} className="bg-blue-700 flex w-[250px] items-center text-white justify-around rounded-md p-2">
                        <div>
                            <Image alt="wpls" src={'/mail/wplus.png'} width={20} height={20} />
                        </div>
                        <div>New Message</div>
                    </div>
                </div>
                <div onClick={()=>{props.setShowInbox(true)}} className={`flex ${props.showInbox ?'outline bg-white':''} my-1 outline-1 outline-gray-300 hover:bg-white w-[250px] p-3 rounded-xl px-4 justify-between`}>
                    <div>
                        <Image alt="ind" src={'/mail/inbox.png'} width={20} height={20} />
                    </div>
                    <div>Inbox</div>
                    <div>{ props.mails === null ? 0 : props.mails.length}</div>
                </div>
                <div onClick={()=>{props.setShowInbox(false)}} className={`flex ${props.showInbox ?'':'outline bg-white'} my-1 outline-1 outline-gray-300 hover:bg-white w-[250px] p-3 rounded-xl px-4 justify-between`}>
                    <div>
                        <Image alt="sen" src={'/mail/sent.png'} width={20} height={20} />
                    </div>
                    <div>Sent Mails</div>
                    <div>{ props.sendMail === null ? 0 :  props.sendMail.length }</div>
                </div>
                <div className="flex hover:outline outline-1 outline-gray-300 hover:bg-white w-[250px] p-3 rounded-xl px-4 justify-between">
                    <div>
                        <Image alt="email" src={'/mail/email.png'} width={25} height={20} />
                    </div>
                    <div>All Mails</div>
                    <div>129</div>
                </div>
                <div className="flex hover:outline outline-1 outline-gray-300 hover:bg-white w-[250px] p-3 rounded-xl px-4 justify-between">
                    <div>
                        <Image alt="neot" src={'/mail/notepad.png'} width={20} height={20} />
                    </div>
                    <div>Drafts</div>
                    <div>20</div>
                </div>
                <div className="flex hover:outline outline-1 outline-gray-300 hover:bg-white w-[250px] p-3 rounded-xl px-4 justify-between">
                    <div>
                        <Image alt="star" src={'/mail/star.png'} width={25} height={20} />
                    </div>
                    <div>Favourites</div>
                    <div>129</div>
                </div>
                <div className="flex hover:outline outline-1 outline-gray-300 hover:bg-white w-[250px] p-3 rounded-xl px-4 justify-between">
                    <div>
                        <Image alt="spam" src={'/mail/spam.png'} width={20} height={20} />
                    </div>
                    <div>Span</div>
                    <div></div>
                </div>
                <div className="flex hover:outline outline-1 outline-gray-300 hover:bg-white w-[250px] p-3 rounded-xl px-4 justify-between">
                    <div>
                        <Image alt="del" src={'/mail/delete.png'} width={25} height={20} />
                    </div>
                    <div>Trash</div>
                    <div>10</div>
                </div>
            </div>
            <div className="text-center font-bold my-4">LABELS</div>
            <div className="flex flex-col items-center">
                <div className="flex w-[250px] items-center hover:bg-white p-3 hover:outline outline-1 outline-gray-300 rounded-xl px-4 justify-between">
                    <div className="w-4 h-4 border border-2 border-green-400 rounded-full"></div>
                    <div>Trash</div>
                    <div>10</div>
                </div>
                <div className="flex w-[250px] items-center hover:bg-white hover:outline outline-1 outline-gray-300 p-3 rounded-xl px-4 justify-between">
                    <div className="w-4 h-4 border border-2 border-blue-400 rounded-full"></div>
                    <div>School</div>
                    <div>15</div>
                </div>
                <div className="flex w-[250px] items-center hover:bg-white hover:outline outline-1 outline-gray-300 p-3 rounded-xl px-4 justify-between">
                    <div className="w-4 h-4 border border-2 border-purple-400 rounded-full"></div>
                    <div>Social</div>
                    <div>8</div>
                </div>
            </div>
        </div>
    )
}