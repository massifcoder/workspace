import Image from "next/image"
import { useState } from "react"

function NavBar(props) {
    const [showAccount, setShowAccount] = useState(false)
    return (
        <div className="flex justify-between text-gray-600 items-center">
            <div className="flex justify-center items-center space-y-2 p-2 mx-2">
                <div className="p-2 ">
                    <Image src="/word.png" alt="logo" width={40} height={40} />
                </div>
                <div>
                    <h1 className="text-2xl text-gray-700">Nanda Docs</h1>
                </div>
            </div>
            <div className="rounded-xl bg-gray-200 w-1/2 p-2 px-4 flex">
                <Image src={'/search.png'} alt='search' height={30} width={30} />
                <input type="text" placeholder="Search..." className="outline w-full mx-2 outline-0 bg-transparent" />
            </div>
            <div className="mx-4 flex">
                <div className="p-2">
                    <Image src={'/dot.png'} alt="dot" height={30} width={30} />
                </div>
                <div onMouseLeave={() => { setShowAccount(false) }} className="mx-6 relative select-none">
                    <div onMouseDown={() => { setShowAccount(!showAccount) }} className="flex mx-4 outline outline-1 items-center px-2 p-2 outline-gray-300 rounded-xl">
                        <Image src={'/asd.webp'} alt="photo" className="mx-2" height={35} width={35} />
                        <h1 className="font-bold">Vishal</h1>
                    </div>
                    {showAccount ? <div className="absolute bg-[#f3f6fc] z-50 rounded-2xl outline outline-1 outline-blue-400 right-0">
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
            </div>
        </div>
    )
}

export default NavBar;