import Image from "next/image"
import Link from "next/link";
import { useRef, useState } from "react";
import Option from "./dialog/Option";

function NavBar(props) {
    const inpref = useRef();
    const sendRef = useRef();
    const titleRef = useRef();
    const fileOption = ['New','Open','Save','Share','Email','Download','Rename','Move','Move to Trash','Page Setup','Page Preview','Print']
    const editOption = ['Undo','Redo','Cut','Copy','Paste','Paste without Formatting','Select All','Delete','Find And Replace']
    const viewOption = ['Mode','Show Print Layout','Show Rule','Show Outline','Show Equation','Toolbar','Full Screen']
    const insertOption = ['Image','Table','Drawing','Chart','Horizontal Line','Emoji','Header','Footer','Break']
    const formatOption = ['Text','Style','Align','Column']
    const toolOption = ['Spelling','Word Count','Review','Dictionary','Translate']
    const extensionOption = ['Add Ons','App Script']
    const helpOption = ['Help','Docs']
    const [showFile, setShowFile] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [showView, setShowView] = useState(false);
    const [showInsert, setShowInsert] = useState(false);
    const [showFormat, setShowFormat] = useState(false);
    const [showTools, setShowTools] = useState(false);
    const [showExtensions, setShowExtensions] = useState(false);
    const [showHelp, setShowHelp] = useState(false);
    const [showAccount, setShowAccount] = useState(false);
    const [showShare, setShowShare] = useState(false);
    const shareHandle = async () => {
        let email_id = inpref.current.value;
        sendRef.current.innerHTML = '<svg class="animate-spin h-5 w-5 mr-3 bg-white border border-2 rounded-md border-blue-800" viewBox="0 0 24 24"></svg>Sending'
        await fetch('/api/share',{method:'POST',body:JSON.stringify({email:email_id})}).then((response)=>{
            return response
        }).then((response)=>{
            if(response.status === 200 ){
                sendRef.current.innerHTML = 'Sent'
                setShowShare(false)
            }
            else{
                sendRef.current.innerHTML = '<div className="text-red-500">Error...</div>'
                setTimeout(()=>{
                    setShowShare(false);
                },3000)
            }
            return response
        }).catch(error=>{
            return error;
        })
    }
    return (
        <div className="print:hidden relative flex justify-between text-gray-600 ">
            <div className="flex justify-center items-center space-y-2 p-2">
                <div className="p-2 ">
                    <Image src="/word.png" alt="logo" width={40} height={40} />
                </div>
                <div>
                    <div className="flex text-gray-500 text-xl">
                        <div className="mx-2">
                            <input ref={titleRef} type='text' placeholder='Untitled Document' className="outline outline-0" />
                        </div>
                        <div className="mx-2">
                            <Image src='/star.png' alt="star" width={20} height={20} />
                        </div>
                    </div>
                    <div className="flex mx-1 text-sm text-gray-800">
                        <div>
                            <div onMouseDown={() => { setShowFile(!showFile) }} className="px-1 select-none hover:bg-gray-200 rounded-sm">File</div>
                            {showFile ? <div onMouseLeave={()=>{setShowFile(!showFile)}} className="cursor-pointer absolute text-center outline outline-1 outline-gray-200 rounded-2xl px-3 z-50 p-3 px-4 bg-white shadow shadow-2xl">
                                {
                                    fileOption.map((value)=>{
                                        return (<Option titleRef={titleRef} shareHandle={setShowShare} inpref={inpref} onclick={()=>{setShowFile(!showFile)}} option={value} />
                                        )
                                    })
                                }
                                </div> : null}
                        </div>
                        <div>
                            <div onMouseDown={() => { setShowEdit(!showEdit) }} className="px-1 hover:bg-gray-200 select-none rounded-sm">Edit</div>
                            {showEdit ? <div onMouseLeave={()=>{setShowEdit(!showEdit)}} className="cursor-pointer absolute text-center outline outline-1 outline-gray-200 rounded-2xl px-3 z-50 p-3 px-4 bg-white shadow shadow-2xl">
                                {
                                    editOption.map(value=>{
                                        return <Option onclick={()=>{setShowEdit(!showEdit)}} option={value}/>
                                    })
                                }    
                            </div> : null}
                        </div>
                        <div>
                            <div onMouseDown={() => { setShowView(!showView) }} className="px-1 hover:bg-gray-200 select-none rounded-sm">View</div>
                            {showView ? <div onMouseLeave={()=>{setShowView(!showView)}} className="cursor-pointer absolute text-center outline outline-1 outline-gray-200 rounded-2xl px-3 z-50 p-3 px-4 bg-white shadow shadow-2xl">
                                {
                                    viewOption.map(value=>{
                                        return <Option onclick={()=>{setShowView(!showView)}} option={value}/>
                                    })
                                }    
                            </div> : null}
                        </div>
                        <div>
                            <div onMouseDown={() => { setShowInsert(!showInsert) }} className="px-1 hover:bg-gray-200 select-none rounded-sm">Insert</div>
                            {showInsert ? <div onMouseLeave={()=>{setShowInsert(!showInsert)}} className="cursor-pointer absolute text-center outline outline-1 outline-gray-200 rounded-2xl px-3 z-50 p-3 px-4 bg-white shadow shadow-2xl">
                                {
                                    insertOption.map(value=>{
                                        return <Option onclick={()=>{setShowInsert(!showInsert)}} option={value}/>
                                    })
                                }
                            </div> : null}
                        </div>
                        <div>
                            <div onMouseDown={() => { setShowFormat(!showFormat) }} className="px-1 hover:bg-gray-200 select-none rounded-sm">Format</div>
                            {showFormat ? <div onMouseLeave={()=>{setShowFormat(!showFormat)}} className="cursor-pointer absolute text-center outline outline-1 outline-gray-200 rounded-2xl px-3 z-50 p-3 px-4 bg-white shadow shadow-2xl">
                            {
                                    formatOption.map(value=>{
                                        return <Option onclick={()=>{setShowFormat(!showFormat)}} option={value}/>
                                    })
                                }
                            </div> : null}
                        </div>
                        <div>
                            <div onMouseDown={() => { setShowTools(!showTools) }} className="px-1 hover:bg-gray-200 select-none rounded-sm">Tools</div>
                            {showTools ? <div onMouseLeave={()=>{setShowTools(!showTools)}} className="cursor-pointer absolute text-center outline outline-1 outline-gray-200 rounded-2xl px-3 z-50 p-3 px-4 bg-white shadow shadow-2xl">
                            {
                                    toolOption.map(value=>{
                                        return <Option onclick={()=>{setShowTools(!showTools)}} option={value}/>
                                    })
                                }
                            </div> : null}
                        </div>
                        <div>
                            <div onMouseDown={() => { setShowExtensions(!showExtensions) }} className="px-1 hover:bg-gray-200 select-none rounded-sm">Extensions</div>
                            {showExtensions ? <div onMouseLeave={()=>{setShowExtensions(!showExtensions)}} className="cursor-pointer absolute text-center outline outline-1 outline-gray-200 rounded-2xl px-3 z-50 p-3 px-4 bg-white shadow shadow-2xl">
                                {
                                    extensionOption.map(value=>{
                                        return <Option onclick={()=>{setShowExtensions(!showExtensions)}} option={value}/>
                                    })
                                }    
                            </div> : null}
                        </div>
                        <div>
                            <div onMouseDown={() => { setShowHelp(!showHelp) }} className="px-1 hover:bg-gray-200 select-none rounded-sm">Help</div>
                            {showHelp ? <div onMouseLeave={()=>{setShowHelp(!showHelp)}} className="cursor-pointer absolute text-center outline outline-1 outline-gray-200 rounded-2xl px-3 z-50 p-3 px-4 bg-white shadow shadow-2xl">
                                {
                                    helpOption.map(value=>{
                                        return <Option onclick={()=>{setShowHelp(!showHelp)}} option={value}/>
                                    })
                                }
                            </div> : null}
                        </div>
                        <div className="text-gray-500 underline px-4">Last edit was <input type="text" className="underline w-5 text-center" onChange={() => { }} value={'0'} ref={props.lastEdit} /> min ago</div>
                    </div>
                </div>
            </div>
            <div className="flex items-center">
                <Link href={'/finance'} className="mx-4">
                    <Image src='/increase.png' alt="increase" width={25} height={25} />
                </Link>
                <div className="mx-4" onMouseDown={props.setShowComment}>
                    <Image src='/comment.png' alt="comment" width={30} height={30} />
                </div>
                <Link href={'/focus'} className="mx-4">
                    <Image src='/hangout.png' alt="hangout" width={30} height={30} />
                </Link>
                <div className="relative">
                    <div onClick={() => { setShowShare(!showShare)}} className="flex select-none mx-4 bg-blue-600 rounded-md py-1 space-x-1 justify-between text-white items-center px-3">
                        <div className="bg-white rounded-full">
                            <Image src='/padlock.png' alt="share" width={20} height={20} />
                        </div>
                        <div>
                            Share
                        </div>
                    </div>
                    {showShare ? <div className="absolute m-2 z-50 right-0 outline outline-1 outline-blue-400 rounded-xl">
                        <div className="bg-white rounded-xl shadow shadow-2xl p-3">
                            <div className="flex items-center">
                                Enter the Email address of the User.
                            </div>
                            <div className="text-md m-2">
                                <input ref={inpref} type="text" className="p-1 h-fit px-4 rounded-full outline outline-1.5 outline-blue-400" />
                            </div>
                            <div className="flex my-2">
                                <div onClick={shareHandle} ref={sendRef} className="flex rounded-full cursor-pointer mx-2 px-3 p-1 bg-[#c2e7ff] ">
                                Send</div>
                                <div onClick={() => { setShowShare(false) }} className="rounded-full mx-2 text-blue-800 cursor-pointer outline outline-1 outline-gray-600 px-3 p-1 text-gray-700">Cancel</div>
                            </div>
                        </div>
                    </div>:null}
                </div>
                <div className="mx-6 relative">
                    <Image onMouseDown={() => { setShowAccount(!showAccount) }} src='/user.png' alt="user" width={30} height={30} />
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