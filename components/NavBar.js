import Image from "next/image"
import Link from "next/link";
import { useState } from "react";

function NavBar(props){
    const [showfile,setShowFile] = useState(false);
    const [showEdit,seShowEdit] = useState(false);
    const [showView,setShowView] = useState(false);
    const [showInsert,setShowInsert] = useState(false);
    const [showFormat,setShowFormat] = useState(false);
    const [showTools,setShowTools] = useState(false);
    const [showExtensions,setShowExtensions] = useState(false);
    const [showHelp,setShowHelp] = useState(false);
    const [showAccount,setShowAccount] = useState(false);
    return (
        <div className="print:hidden relative flex justify-between text-gray-600 ">
            <div className="flex justify-center items-center space-y-2 p-2">
                <div className="p-2 ">
                    <Image src="/word.png" alt="logo" width={40} height={40} />
                </div>
                <div>
                    <div className="flex text-gray-500 text-xl">
                        <div className="mx-2">
                            <input type='text' placeholder='Untitled Document' className="outline outline-0"/>
                        </div>
                        <div className="mx-2">
                            <Image src='/star.png' alt="star" width={20} height={20} />
                        </div>
                    </div>
                    <div className="flex mx-1 text-sm text-gray-800">
                        <div>
                            <div onMouseDown={()=>{setShowFile(!showfile)}} className="px-1 select-none hover:bg-gray-200 rounded-sm">File</div>
                            {showfile? <div className="cursor-pointer absolute text-center outline outline-1 outline-gray-200 rounded-2xl px-3 z-50 p-3 px-4 bg-white shadow shadow-2xl">
                                <div className="mx-4 hover:bg-gray-300 w-40 p-1 px-2 my-1 rounded-md">New</div>
                                <div className="mx-4 hover:bg-gray-300 w-40 p-1 px-2 my-1 rounded-md">Open</div>
                                <div className="mx-4 hover:bg-gray-300 w-40 p-1 px-2 my-1 rounded-md">Make a Copy</div>
                                <hr/>
                                <div className="mx-4 hover:bg-gray-300 w-40 p-1 px-2 my-1 rounded-md">Share</div>
                                <div className="mx-4 hover:bg-gray-300 w-40 p-1 px-2 my-1 rounded-md">Email</div>
                                <div className="mx-4 hover:bg-gray-300 w-40 p-1 px-2 my-1 rounded-md">Download</div>
                                <hr/>
                                <div className="mx-4 hover:bg-gray-300 w-40 p-1 px-2 my-1 rounded-md">Rename</div>
                                <div className="mx-4 hover:bg-gray-300 w-40 p-1 px-2 my-1 rounded-md">Move</div>
                                <div className="mx-4 hover:bg-gray-300 w-40 p-1 px-2 my-1 rounded-md">Shortcut to Drive</div>
                                <div className="mx-4 hover:bg-gray-300 w-40 p-1 px-2 my-1 rounded-md">Move to Trash</div>
                                <hr/>
                                <div className="mx-4 hover:bg-gray-300 w-40 p-1 px-2 my-1 rounded-md">Share</div>
                                <hr/>
                                <div className="mx-4 hover:bg-gray-300 w-40 p-1 px-2 my-1 rounded-md">Page Setup</div>
                                <div className="mx-4 hover:bg-gray-300 w-40 p-1 px-2 my-1 rounded-md">Page Preview</div>
                                <div className="mx-4 hover:bg-gray-300 w-40 p-1 px-2 my-1 rounded-md">Print</div>
                            </div>: null}
                        </div>
                        <div>
                            <div onMouseDown={()=>{seShowEdit(!showEdit)}} className="px-1 hover:bg-gray-200 select-none rounded-sm">Edit</div>
                            {showEdit? <div className="cursor-pointer absolute text-center outline outline-1 outline-gray-200 rounded-2xl px-3 z-50 p-3 px-4 bg-white shadow shadow-2xl">
                                <div className="mx-4 hover:bg-gray-300 w-40 p-1 px-2 my-1 rounded-md">Undo</div>
                                <div className="mx-4 hover:bg-gray-300 w-40 p-1 px-2 my-1 rounded-md">Redo</div>
                                <hr/>
                                <div className="mx-4 hover:bg-gray-300 w-40 p-1 px-2 my-1 rounded-md">Cut</div>
                                <div className="mx-4 hover:bg-gray-300 w-40 p-1 px-2 my-1 rounded-md">Copy</div>
                                <div className="mx-4 hover:bg-gray-300 w-40 p-1 px-2 my-1 rounded-md">Paste</div>
                                <div className="mx-4 hover:bg-gray-300 w-40 p-1 px-2 my-1 rounded-md">Paste without Formatting</div>
                                <hr/>
                                <div className="mx-4 hover:bg-gray-300 w-40 p-1 px-2 my-1 rounded-md">Select All</div>
                                <div className="mx-4 hover:bg-gray-300 w-40 p-1 px-2 my-1 rounded-md">Delete</div>
                                <hr/>
                                <div className="mx-4 hover:bg-gray-300 w-40 p-1 px-2 my-1 rounded-md">Find And Replace</div>
                            </div>: null}
                        </div>
                        <div>
                            <div onMouseDown={()=>{setShowView(!showView)}} className="px-1 hover:bg-gray-200 select-none rounded-sm">View</div>
                            {showView? <div className="cursor-pointer absolute text-center outline outline-1 outline-gray-200 rounded-2xl px-3 z-50 p-3 px-4 bg-white shadow shadow-2xl">
                                <div className="mx-4 hover:bg-gray-300 w-40 p-1 px-2 my-1 rounded-md">Mode</div>
                                <hr/>
                                <div className="mx-4 hover:bg-gray-300 w-40 p-1 px-2 my-1 rounded-md">Show Print Layout</div>
                                <div className="mx-4 hover:bg-gray-300 w-40 p-1 px-2 my-1 rounded-md">Show Ruler</div>
                                <div className="mx-4 hover:bg-gray-300 w-40 p-1 px-2 my-1 rounded-md">Show Outline</div>
                                <div className="mx-4 hover:bg-gray-300 w-40 p-1 px-2 my-1 rounded-md">Show Equation Toolbar</div>
                                <hr/>
                                <div className="mx-4 hover:bg-gray-300 w-40 p-1 px-2 my-1 rounded-md">Full Screen</div>
                            </div>: null}
                        </div>
                        <div>
                            <div onMouseDown={()=>{setShowInsert(!showInsert)}} className="px-1 hover:bg-gray-200 select-none rounded-sm">Insert</div>
                            {showInsert? <div className="cursor-pointer absolute text-center outline outline-1 outline-gray-200 rounded-2xl px-3 z-50 p-3 px-4 bg-white shadow shadow-2xl">
                                <div className="mx-4 hover:bg-gray-300 w-40 p-1 px-2 my-1 rounded-md">Image</div>
                                <div className="mx-4 hover:bg-gray-300 w-40 p-1 px-2 my-1 rounded-md">Table</div>
                                <hr/>
                                <div className="mx-4 hover:bg-gray-300 w-40 p-1 px-2 my-1 rounded-md">Drawing</div>
                                <div className="mx-4 hover:bg-gray-300 w-40 p-1 px-2 my-1 rounded-md">Chart</div>
                                <div className="mx-4 hover:bg-gray-300 w-40 p-1 px-2 my-1 rounded-md">Horizontal Line</div>
                                <div className="mx-4 hover:bg-gray-300 w-40 p-1 px-2 my-1 rounded-md">Emoji</div>
                                <hr/>
                                <div className="mx-4 hover:bg-gray-300 w-40 p-1 px-2 my-1 rounded-md">Header</div>
                                <div className="mx-4 hover:bg-gray-300 w-40 p-1 px-2 my-1 rounded-md">Footer</div>
                                <hr/>
                                <div className="mx-4 hover:bg-gray-300 w-40 p-1 px-2 my-1 rounded-md">Break</div>
                            </div>: null}
                        </div>
                        <div>
                            <div onMouseDown={()=>{setShowFormat(!showFormat)}} className="px-1 hover:bg-gray-200 select-none rounded-sm">Format</div>
                            {showFormat? <div className="cursor-pointer absolute text-center outline outline-1 outline-gray-200 rounded-2xl px-3 z-50 p-3 px-4 bg-white shadow shadow-2xl">
                                <div className="mx-4 hover:bg-gray-300 w-40 p-1 px-2 my-1 rounded-md">Text</div>
                                <div className="mx-4 hover:bg-gray-300 w-40 p-1 px-2 my-1 rounded-md">Style</div>
                                <hr/>
                                <div className="mx-4 hover:bg-gray-300 w-40 p-1 px-2 my-1 rounded-md">Align</div>
                                <div className="mx-4 hover:bg-gray-300 w-40 p-1 px-2 my-1 rounded-md">Column</div>
                            </div>: null}
                        </div>
                        <div>
                            <div onMouseDown={()=>{setShowTools(!showTools)}} className="px-1 hover:bg-gray-200 select-none rounded-sm">Tools</div>
                            {showTools? <div className="cursor-pointer absolute text-center outline outline-1 outline-gray-200 rounded-2xl px-3 z-50 p-3 px-4 bg-white shadow shadow-2xl">
                                <div className="mx-4 hover:bg-gray-300 w-40 p-1 px-2 my-1 rounded-md">Spelling</div>
                                <div className="mx-4 hover:bg-gray-300 w-40 p-1 px-2 my-1 rounded-md">Word Count</div>
                                <hr/>
                                <div className="mx-4 hover:bg-gray-300 w-40 p-1 px-2 my-1 rounded-md">Review</div>
                                <div className="mx-4 hover:bg-gray-300 w-40 p-1 px-2 my-1 rounded-md">Dictionary</div>
                                <div className="mx-4 hover:bg-gray-300 w-40 p-1 px-2 my-1 rounded-md">Translate</div>
                            </div>: null}
                        </div>
                        <div>
                            <div onMouseDown={()=>{setShowExtensions(!showExtensions)}} className="px-1 hover:bg-gray-200 select-none rounded-sm">Extensions</div>
                            {showExtensions? <div className="cursor-pointer absolute text-center outline outline-1 outline-gray-200 rounded-2xl px-3 z-50 p-3 px-4 bg-white shadow shadow-2xl">
                                <div className="mx-4 hover:bg-gray-300 w-40 p-1 px-2 my-1 rounded-md">Add ons</div>
                                <div className="mx-4 hover:bg-gray-300 w-40 p-1 px-2 my-1 rounded-md">App Script</div>
                            </div>: null}
                        </div>
                        <div>
                            <div onMouseDown={()=>{setShowHelp(!showHelp)}} className="px-1 hover:bg-gray-200 select-none rounded-sm">Help</div>
                            {showHelp? <div className="cursor-pointer absolute text-center outline outline-1 outline-gray-200 rounded-2xl px-3 z-50 p-3 px-4 bg-white shadow shadow-2xl">
                                <div className="mx-4 hover:bg-gray-300 w-40 p-1 px-2 my-1 rounded-md">Help</div>
                                <div className="mx-4 hover:bg-gray-300 w-40 p-1 px-2 my-1 rounded-md">Docs</div>
                            </div>: null}
                        </div>
                        <div className="text-gray-500 underline px-4">Last edit was <input type="text" className="underline w-5 text-center" onChange={()=>{}} value={'0'} ref={props.lastEdit}/> min ago</div>
                    </div>
                </div>
            </div>
            <div className="flex items-center">
                <div className="mx-4">
                    <Image src='/increase.png' alt="increase" width={25} height={25} />
                </div>
                <div className="mx-4">
                    <Image src='/comment.png' alt="comment" width={30} height={30} />
                </div>
                <Link href={'/focus'} className="mx-4">
                    <Image src='/hangout.png' alt="hangout" width={30} height={30} />
                </Link>
                <div className="flex mx-4 bg-blue-600 rounded-md py-1 space-x-1 justify-between text-white items-center px-3">
                    <div className="bg-white rounded-full">
                        <Image src='/padlock.png' alt="share" width={20} height={20} />
                    </div>
                    <div>
                        Share
                    </div>
                </div>
                <div className="mx-6 relative">
                    <Image onMouseDown={()=>{setShowAccount(!showAccount)}} src='/user.png' alt="user" width={30} height={30} />
                    {showAccount? <div className="absolute bg-[#f3f6fc] z-50 rounded-2xl outline outline-1 outline-blue-400 right-0">
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
                    </div>: null}
                </div>

            </div>
        </div>
    )
}

export default NavBar;