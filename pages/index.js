import { useEffect } from "react";
import LoginForm from "../components/home/loginform";
import SideImage from "../components/home/sideImage";
import { useRouter } from "next/router";

export default function HomePage() {
    const router = useRouter();
    useEffect(()=>{
        const token = localStorage.getItem('token');
        const name = localStorage.getItem('username');
        const fname = localStorage.getItem('fname');
            if(token && name && fname){
                router.push('/word')
            }
    },[])
    return (
        <div className="bg-[#c7c6cf] min-h-screen h-fit p-12 flex items-center justify-center">
            <div className="flex rounded-2xl bg-white w-fit">
                <LoginForm />
                <SideImage />
            </div>
        </div>
    )
}