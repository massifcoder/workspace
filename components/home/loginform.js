import { useRouter } from "next/router";
import { useRef, useState } from "react"

export default function LoginForm() {
    const router = useRouter();
    const namRef = useRef();
    const passRef = useRef();
    const mailRef = useRef();
    const [login, setLogin] = useState(true);
    const clickHandle = async () =>{
        let naam = null;
        if(!login){
            naam = namRef.current.value;
        }
        const passWord = passRef.current.value;
        const mail = mailRef.current.value;
        if(login){
            fetch('/api/home/login',{method:'POST',body:JSON.stringify({mail:mail,password:passWord})})
            .then((resp)=>{
                return resp.json();
            }).then((resp)=>{
                if(resp.user==='ok'){
                    const token = resp.token;
                    localStorage.setItem('token',token);
                    localStorage.setItem('username',mail);
                    localStorage.setItem('fname',resp.name);
                    router.push('/word')
                }
                else{
                    router.push('/404')
                }
                return resp;
            })
        }
        else{
            fetch('/api/home/signup',{method:'POST',body:JSON.stringify({name:naam,mail:mail,password:passWord})})
            .then((resp)=>{
                return resp.json();
            }).then((resp)=>{
                if(resp.user==='ok'){
                    router.push('/404')
                }
                else{
                    const token = resp.token;
                    localStorage.setItem('token',token);
                    localStorage.setItem('username',mail);
                    localStorage.setItem('fname',naam);
                    router.push('/word')
                }
                return resp;
            })
        }
    }
    return (
        <div className=" cursor-pointer select-none mx-6 m-0 p-0 m-auto rounded-xl w-[350px] text-gray-800">
            <div className="h-fit">
                <h1 className="text-2xl font-bold text-center my-2">{login? 'Login':'Create an Account'}</h1>
                <p className="text-gray-500 text-center">{login?'Log In':'Sign Up'} now and enjoy the features!</p>
                <div className="flex flex-col min-h-[350px] h-fit py-4 w-full h-full justify-between">
                    {login ? null : <label>
                        <p className=" text-black font-bold text-sm">Your name</p>
                        <input ref={namRef} className="focus:outline outline-2 outline-[#b9b2f0] border border-2 border-gray-400/50 my-2 p-2 w-full rounded-md" type="text" placeholder="First Last" />
                    </label>}
                    <label>
                        <p className=" text-black font-bold text-sm">Email</p>
                        <input ref={mailRef} className="focus:outline outline-2 outline-[#b9b2f0] border border-2 border-gray-400/50 my-2 p-2 w-full rounded-md" type="emial" placeholder="you@example.com" />
                    </label>
                    <label>
                        <p className="mt-2 text-black font-bold text-sm">Password</p>
                        <input ref={passRef} className="focus:outline outline-2 outline-[#b9b2f0] border border-2 border-gray-400/50 my-2 p-2 w-full rounded-md" type="password" placeholder="Password" />
                    </label>
                    <div>
                    <p onClick={()=>{setLogin(!login)}} className="font-bold text-sm text-center text-blue-800">{login?'Sign Up':'Log In'}</p>
                    <div onClick={clickHandle} className=" hover:bg-purple-600 text-white text-sm bg-[#835df0] rounded-md my-2 p-2 text-center">
                        {login? 'Log In':'Create Account'}
                    </div>
                    <p className="text-center text-sm text-gray-500">OR</p>
                    <div id="GoogleID"  className=" bg-white p-2 text-center font-bold border-2 hover:border-gray-400 cursor-pointer m-2 rounded-md" >Sign In with <span className="text-[#007fec]">G</span><span className="text-[#f23e2f]">o</span><span className="text-[#f1b300]">o</span><span className="text-[#007fec]">g</span><span className="text-[#00a146]">l</span><span className="text-[#f23e2f]">e</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}