import Image from "next/image"
import { useRouter } from "next/router";
import { useState } from "react"
import Account from "../../common/account";

function NavBar(props) {
    const [showAccount, setShowAccount] = useState(false);
    return (
        <div className="flex justify-between text-gray-600 items-center">
            <div className="flex justify-center items-center space-y-2 p-2 mx-2">
                <div className="p-2 ">
                    <Image src="/word/word.png" alt="logo" width={40} height={40} />
                </div>
                <div>
                    <h1 className="text-2xl text-gray-700">Nanda Docs</h1>
                </div>
            </div>
            <div className="rounded-xl bg-gray-200 w-1/2 p-2 px-4 flex">
                <Image src={'/word/search.png'} alt='search' height={30} width={30} />
                <input type="text" placeholder="Search..." className="outline w-full mx-2 outline-0 bg-transparent" />
            </div>
            <div className="mx-4 flex">
                <div className="p-2">
                    <Image src={'/word/dot.png'} alt="dot" height={30} width={30} />
                </div>
                <div onMouseLeave={() => { setShowAccount(false) }} className="mx-6 relative select-none">
                    <div onMouseDown={() => { setShowAccount(!showAccount) }} className="flex mx-4 outline outline-1 items-center px-2 p-2 outline-gray-300 rounded-xl">
                        <Image src={'/word/asd.webp'} alt="photo" className="mx-2" height={35} width={35} />
                        <h1 className="font-bold">{props.fname}</h1>
                    </div>
                    {showAccount ? <Account/> : null}
                </div>
            </div>
        </div>
    )
}

export default NavBar;