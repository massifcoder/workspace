import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
            const id = toast.loading('Please wait....')
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
                    toast.update(id,{
                        render:"Logged In!",
                        type:"success",
                        isLoading:false
                      })
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
                    toast.update(id,{
                        render:"Signed Up!",
                        type:"success",
                        isLoading:false
                      })
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


    const handleLogin = async ()=>{
        window.google.accounts.id.initialize({
            client_id: "366982198533-mmpdp20pnjq4osv2rfvq0leu3thcmjo1.apps.googleusercontent.com",
            callback: async (response) => {
              // Handle the response
              function decodeJwtResponse(jwtToken) {
                      const base64Url = jwtToken.split('.')[1];
                      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
                      const payload = decodeURIComponent(atob(base64).split('').map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join(''));
                      return JSON.parse(payload);
                  }
              const responsePayload = decodeJwtResponse(response.credential);
              const data = {
                name : responsePayload.name,
                mail : responsePayload.email,
                password : responsePayload.sub
              }
              const id = toast.loading('Please wait....')
              await fetch('/api/home/signup',{
                method:'POST',
                body: JSON.stringify(data)
              }).then((resp)=>{
                toast.update(id,{
                    render:"Logged In!",
                    type:"success",
                    isLoading:false
                  })
                  return resp.json();
              }).then((resp)=>{
                    const token = resp.token;
                    localStorage.setItem('token',token);
                    localStorage.setItem('username',data.mail);
                    localStorage.setItem('fname',data.name);
                    router.push('/word')
                    return resp;
              })
              
            },
          });
          window.google.accounts.id.prompt();
    }


    return (
        <div className=" cursor-pointer select-none mx-6 p-0 m-auto rounded-xl w-[350px] text-gray-800">
            <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
            <div className="h-fit">
                <h1 className="text-2xl font-bold text-center my-2">{login? 'Login':'Create an Account'}</h1>
                <p className="text-gray-500 text-center">{login?'Log In':'Sign Up'} now and enjoy the features!</p>
                <div className="flex flex-col min-h-[350px] py-4 w-full h-full justify-between">
                    {login ? null : <label>
                        <p className=" text-black font-bold text-sm">Your name</p>
                        <input ref={namRef} className="focus:outline outline-2 outline-[#b9b2f0] border-2 border-gray-400/50 my-2 p-2 w-full rounded-md" type="text" placeholder="First Last" />
                    </label>}
                    <label>
                        <p className=" text-black font-bold text-sm">Email</p>
                        <input ref={mailRef} className="focus:outline outline-2 outline-[#b9b2f0] border-2 border-gray-400/50 my-2 p-2 w-full rounded-md" type="emial" placeholder="you@example.com" />
                    </label>
                    <label>
                        <p className="mt-2 text-black font-bold text-sm">Password</p>
                        <input ref={passRef} className="focus:outline outline-2 outline-[#b9b2f0] border-2 border-gray-400/50 my-2 p-2 w-full rounded-md" type="password" placeholder="Password" />
                    </label>
                    <div>
                    <p onClick={()=>{setLogin(!login)}} className="font-bold text-sm text-center text-blue-800">{login?'Sign Up':'Log In'}</p>
                    <div onClick={clickHandle} className=" hover:bg-purple-600 text-white text-sm bg-[#835df0] rounded-md my-2 p-2 text-center">
                        {login? 'Log In':'Create Account'}
                    </div>
                    <p className="text-center text-sm text-gray-500">OR</p>
                    <div onClick={handleLogin} id="GoogleID"  className=" bg-white p-2 text-center font-bold border-2 hover:border-gray-400 cursor-pointer m-2 rounded-md" >Sign In with <span className="text-[#007fec]">G</span><span className="text-[#f23e2f]">o</span><span className="text-[#f1b300]">o</span><span className="text-[#007fec]">g</span><span className="text-[#00a146]">l</span><span className="text-[#f23e2f]">e</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}