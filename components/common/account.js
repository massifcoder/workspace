import Image from "next/image";
import { useRouter } from "next/router";

export default function Account(props){
    const router = useRouter();
    const signOut = () =>{
        localStorage.removeItem('token');
        localStorage.removeItem('fname');
        localStorage.removeItem('username');
        router.push('/');
    }
    return (
        <div  className={`absolute bg-[#f3f6fc] z-50 rounded-2xl outline outline-1 outline-blue-400 ${props.ty? 'left-0':'right-0'}`}>
                        <div className="flex items-center m-4 rounded-2xl bg-white">
                            <Image src={'/word/asd.webp'} alt="user" height={40} width={40} className="m-2" />
                            <div className="w-60">
                                <h1>{localStorage.getItem('fname')}</h1>
                                <p className="text-xs text-gray-500">{localStorage.getItem('username')}</p>
                            </div>
                        </div>
                        <div onClick={signOut} className="text-center hover:text-blue-800 text-sm mx-4 select-none">Sign Out of all accounts</div>
                        <div onClick={signOut} className="text-center hover:text-blue-800 text-sm mx-4 select-none">Add Another Accounts</div>
                        <div className="flex items-center m-4 rounded-2xl">
                            <Image src={'/word/dpp.jpg'} alt="user" height={40} width={40} className="m-2 rounded-full" />
                            <div className="w-60">
                                <h1>Radhika Sharma</h1>
                                <p className="text-xs text-gray-500">radhasharma243527ji@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex items-center m-4 rounded-2xl">
                            <Image src={'/word/user.png'} alt="user" height={40} width={40} className="m-2 rounded-full" />
                            <div className="w-60">
                                <h1>Anchal Sharma</h1>
                                <p className="text-xs text-gray-500">anchalsharma243527ji@gmail.com</p>
                            </div>
                        </div>
                    </div>
    )
}