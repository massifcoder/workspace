import Image from "next/image"
import { useState } from "react"

export default function LeftSide() {
    const [showAccount, setShowAccount] = useState(false)
    return (
        <div className="w-1/4 h-fit p-8 cursor-pointer rounded-l-2xl bg-[#f4f6f8]">
            <div className="flex items-center">
                <div onMouseLeave={() => { setShowAccount(false) }} className="relative">
                    <Image onMouseDown={() => { setShowAccount(!showAccount) }} src='/asd.webp' alt="user" width={45} height={45} />
                    {showAccount ? <div className="absolute bg-[#f3f6fc] z-50 rounded-2xl outline outline-1 outline-blue-400 left-0">
                        <div className="flex items-center m-4 rounded-2xl bg-white">
                            <Image src={'/asd.webp'} alt="user" height={40} width={40} className="m-2" />
                            <div className="w-60">
                                <h1>Vishal Sharma</h1>
                                <p className="text-xs text-gray-500">vishalsharma243527@gmail.com</p>
                            </div>
                        </div>
                        <div className="text-center text-sm mx-4 select-none">Sign Out of all accounts</div>
                        <div className="text-center text-sm mx-4 select-none">Add Another Accounts</div>
                        <div className="flex items-center m-4 rounded-2xl">
                            <Image src={'/dpp.jpg'} alt="user" height={40} width={40} className="m-2 rounded-full" />
                            <div className="w-60">
                                <h1>Radhika Sharma</h1>
                                <p className="text-xs text-gray-500">radhasharma243527ji@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex items-center m-4 rounded-2xl">
                            <Image src={'/user.png'} alt="user" height={40} width={40} className="m-2 rounded-full" />
                            <div className="w-60">
                                <h1>Anchal Sharma</h1>
                                <p className="text-xs text-gray-500">anchalsharma243527ji@gmail.com</p>
                            </div>
                        </div>
                    </div> : null}
                </div>
                <div className="mx-6 text-gray-800">
                    <h1 className="text-xl font-bold">Vishal Design</h1>
                    <p>massifcoder@gmail.com</p>
                </div>
                <div>
                    <Image src={'/mail/dots.png'} width={20} height={20} />
                </div>
            </div>
            <div className="items-center flex flex-col">
                <div className="flex items-center px-12 py-8">
                    <div className="bg-blue-700 flex w-[250px] text-white justify-around rounded-md p-2">
                        <div>
                            <Image src={'/mail/wplus.png'} width={20} height={20} />
                        </div>
                        <div>New Message</div>
                    </div>
                </div>
                <div className="flex outline my-1 outline-1 outline-gray-300 bg-white w-[250px] p-3 rounded-xl px-4 justify-between">
                    <div>
                        <Image src={'/mail/inbox.png'} width={20} height={20} />
                    </div>
                    <div>Inbox</div>
                    <div>382</div>
                </div>
                <div className="flex hover:outline my-1 outline-1 outline-gray-300 hover:bg-white w-[250px] p-3 rounded-xl px-4 justify-between">
                    <div>
                        <Image src={'/mail/sent.png'} width={20} height={20} />
                    </div>
                    <div>Sent Mails</div>
                    <div>129</div>
                </div>
                <div className="flex hover:outline outline-1 outline-gray-300 hover:bg-white w-[250px] p-3 rounded-xl px-4 justify-between">
                    <div>
                        <Image src={'/mail/email.png'} width={25} height={20} />
                    </div>
                    <div>All Mails</div>
                    <div>129</div>
                </div>
                <div className="flex hover:outline outline-1 outline-gray-300 hover:bg-white w-[250px] p-3 rounded-xl px-4 justify-between">
                    <div>
                        <Image src={'/mail/notepad.png'} width={20} height={20} />
                    </div>
                    <div>Drafts</div>
                    <div>20</div>
                </div>
                <div className="flex hover:outline outline-1 outline-gray-300 hover:bg-white w-[250px] p-3 rounded-xl px-4 justify-between">
                    <div>
                        <Image src={'/mail/star.png'} width={25} height={20} />
                    </div>
                    <div>Favourites</div>
                    <div>129</div>
                </div>
                <div className="flex hover:outline outline-1 outline-gray-300 hover:bg-white w-[250px] p-3 rounded-xl px-4 justify-between">
                    <div>
                        <Image src={'/mail/spam.png'} width={20} height={20} />
                    </div>
                    <div>Span</div>
                    <div></div>
                </div>
                <div className="flex hover:outline outline-1 outline-gray-300 hover:bg-white w-[250px] p-3 rounded-xl px-4 justify-between">
                    <div>
                        <Image src={'/mail/delete.png'} width={25} height={20} />
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