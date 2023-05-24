import Image from "next/image"
import { useEffect, useRef, useState } from "react";
import Comment from "./Comment";
import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";
import Chat from "./Chat";

function Screen(props) {
    
    const sel = useRef();
    const fnt = useRef();
    const tgt = useRef();
    const iul = useRef();
    const [addingImage, setAddImage] = useState(false);
    const [tight, setTight] = useState('normal');
    const [editorScale, setScale] = useState(100);
    const [fontStyle, setFontStyle] = useState('sans');
    const [fontSize, setFontSize] = useState(3);
    const [textAlign, setTextAlign] = useState('left');
    let editorContent = ""
    useEffect(() => {
        props.editorDiv.current.focus();
    }, []);

    const editHandler = (event, chang) => {
        event.preventDefault();
        props.editorDiv.current.focus()
        if (chang === 'foreColor') {
            document.execCommand(chang, false, event.target.value)
        }
        else if (chang === 'fontSize') {
            var siz = window.getComputedStyle(props.editorDiv.current).getPropertyValue('font-size')
            document.execCommand(chang, null, parseInt(siz) + 1)
        }
        else if (chang === 'decreaseFontSize') {
            document.execCommand(chang, null);
        }
        else if(chang ==='undo'){
            document.execCommand(chang);
        }
        else {
            document.execCommand(chang, false, null)
        }
    }
    const alignHandler = (event, chang) => {
        event.preventDefault();
        setTextAlign(chang);
    }

    const handlePrint = () => {
        window.print()
    }

    const keyDownHandler = (event) => {
        document.execCommand('save');
        props.diff.current.value = parseInt(Date.now() / 60000);
        props.timeChange();
        let comm = ""
        if (event.code === "KeyB" && (event.metaKey || event.ctrlKey)) {
            comm = 'bold'
            event.preventDefault();
            document.execCommand(comm, false, null)
        }
        else if (event.key === 'z' && (event.ctrlKey || event.metaKey)) {
            event.preventDefault();
            document.execCommand('undo');
          }
        else if (event.code === "KeyU" && (event.metaKey || event.ctrlKey)) {
            comm = 'underline'
            event.preventDefault();
            document.execCommand(comm, false, null)
        }
        else if (event.code === "KeyI" && (event.metaKey || event.ctrlKey)) {
            comm = 'italic'
            event.preventDefault();
            document.execCommand(comm, false, null)
        }
    }

    const addImage = () => {
        let url = iul.current.value;
        console.log(url)
        if (document.queryCommandSupported('insertImage')) {
            props.editorDiv.current.focus();
            document.execCommand('insertImage', false, url);
            const images = props.editorDiv.current.getElementsByTagName('img');
            const newImage = images[images.length - 1];
            newImage.style.width = '200px';
            newImage.style.height = 'auto';
        } else {
            console.log("Inserting images is not supported in this browser.");
        }
    }

    return (
        <div>
            <div className="print:hidden flex text-gray-800 text-xs justify-between items-center">
                <div className="flex items-center space-x-4 items-center ml-6">
                    <div className="hover:bg-gray-300 rounded-sm p-1" onClick={(event)=>{editHandler(event,'undo')}}>
                        <Image src='/word/undo1.png' alt='undo' height={15} width={15} />
                    </div>
                    <div className="hover:bg-gray-300 rounded-sm p-1"  onClick={(event)=>{editHandler(event,'redo')}}>
                        <Image src='/word/redo1.png' alt='redo' height={15} width={15} />
                    </div>
                    <div onClick={handlePrint} className="hover:bg-gray-300 rounded-sm p-1">
                        <Image src='/word/print1.png' alt='printer' height={20} width={20} />
                    </div>
                    <div className="hover:bg-gray-300 rounded-sm p-1">
                        <Image src='/word/spell-check.png' alt='undo' height={20} width={20} />
                    </div>
                    <div>
                        |
                    </div>
                    <div className="hover:bg-gray-300 rounded-sm p-1 text-md">
                        <select ref={fnt} placeholder={'100%'} onChange={() => { setFontStyle(fnt.current.value) }} className="appearance-none bg-transparent px-1">
                            <option value={'sans'}>Arial</option>
                            <option value={'serif'}>Serif</option>
                            <option value={'mono'}>Mono</option>
                        </select>
                    </div>
                    <div>
                        |
                    </div>
                    <div className="hover:bg-gray-300 rounded-sm p-1">
                        <select ref={tgt} onChange={() => { setTight(tgt.current.value) }} className="appearance-none bg-transparent px-1">
                            <option value={'tighter'}>Tight</option>
                            <option value={'wider'}>Normal</option>
                            <option value={'widest'}>Wide</option>
                        </select>
                    </div>
                    <div>
                        |
                    </div>
                    <div className="hover:bg-gray-300 rounded-sm p-1">
                        <select ref={sel} onChange={() => { setScale(sel.current.value) }} className="appearance-none bg-transparent px-1">
                            <option value={100}>75%</option>
                            <option value={110}>100%</option>
                            <option value={125}>150%</option>
                        </select>
                    </div>
                    <div className="flex ">
                        <div onClick={(event) => { if (fontSize > 0) { setFontSize((oldVal) => { return oldVal - 1 }); editHandler(event, 'decreaseFontSize') } }} className="px-2 select-none cursor-pointer rounded-l-sm border border-gray-400 hover:bg-gray-300">
                            -
                        </div>
                        <div className="px-2 border border-gray-400 hover:bg-gray-300">
                            <input placeholder={fontSize} type="number" className="placeholder-black w-5 [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none" />
                        </div>
                        <div onClick={(event) => { if (fontSize < 100) { setFontSize((oldVal) => { return oldVal + 1 }); editHandler(event, 'fontSize') } }} className="px-2 select-none rounded-r-sm border cursor-pointer border-gray-400 hover:bg-gray-300">
                            +
                        </div>
                    </div>
                    <div className=" flex items-center">
                        <div onMouseDown={(event) => { editHandler(event, "bold") }} className="cursor-pointer font-bold text-[16px] text-gray-600 hover:bg-gray-300 rounded-sm p-1 px-2" >
                            B
                        </div>
                        <div onMouseDown={(event) => { editHandler(event, "italic") }} className="cursor-pointer px-2 font-serif italic text-[16px] text-gray-600 font-bold hover:bg-gray-300 rounded-sm p-1">
                            I
                        </div>
                        <div onMouseDown={(event) => { editHandler(event, "underline") }} className="cursor-pointer font-serif px-2 underline font-bold text-[16px] text-gray-600 hover:bg-gray-300 rounded-sm p-1">
                            U
                        </div>
                        <div className="px-2  rounded-sm p-1 flex relative">
                            {/* <Image src='/marker.png' alt='marker' className="bg-yellow-400  relative" height={20} width={20} /> */}
                            <input type="color" className="w-6 hover:bg-gray-300 m-0.5 p-0.5" onChange={(event) => { editHandler(event, 'foreColor') }}></input>
                        </div>
                        <div>
                            |
                        </div>
                    </div>
                    {/* <div className="hover:bg-gray-300 rounded-sm p-1">
                        <Image src='/link.png' alt='marker' height={18} width={18} />
                    </div> */}
                    <div onClick={() => { props.setShowComment(!props.showComment) }} className="hover:bg-gray-300 rounded-sm p-1">
                        <Image src='/word/chat.png' alt='marker' height={16} width={16} />
                    </div>
                    <div className="relative">
                        <div onClick={() => { setAddImage(!addingImage) }} className="hover:bg-gray-300 rounded-sm p-1">
                            <Image src='/word/insert_image.png' alt='marker' height={16} width={16} />
                        </div>
                    </div>
                    <div>
                        |
                    </div>
                    <div className="hover:bg-gray-300 rounded-sm p-1" onMouseDown={(event) => { alignHandler(event, 'left') }}>
                        <Image src='/word/align-left.png' alt='marker' height={16} width={16} />
                    </div>
                    <div className="hover:bg-gray-300 rounded-sm p-1" onMouseDown={(event) => { alignHandler(event, 'center') }}>
                        <Image src='/word/center-align.png' alt='marker' height={16} width={16} />
                    </div>
                    <div className="hover:bg-gray-300 rounded-sm p-1" onMouseDown={(event) => { alignHandler(event, 'right') }}>
                        <Image src='/word/right-align.png' alt='marker' height={16} width={16} />
                    </div>
                </div>
                {/* </div> */}

                <div className="mr-20">
                    <div className="bg-blue-100 text-blue-500 px-4 p-1 rounded-sm text-[15px]">
                        Editing
                    </div>
                </div>
            </div>
            <hr />
            <div className="bg-[#f1f3f4] p-2 print:p-0 min-h-screen h-full">
                {/* This is the textarea component */}
                <div className="relative justify-center bg-[#f8f9fa] border border-gray-200 min-h-screen h-full flex p-1">
                    {addingImage ? <div className="absolute">
                        <div className="bg-white rounded-xl shadow shadow-2xl p-3">
                            <div className=" m-2 font-bold w-full text-center">
                                Add URL of Photo
                            </div>
                            <input ref={iul} type="text" className="p-1 h-fit px-4 rounded-full outline outline-1.5 outline-blue-400" />
                            <p className="text-xs m-2 text-center">Make sure image is licenced...</p>
                            <div className="flex my-2 justify-around">
                                <div className="rounded-full cursor-pointer mx-2 px-3 p-1 bg-[#c2e7ff] text-gray-700" onClick={() => { setAddImage(false); addImage() }}>Add Image</div>
                                <div className="rounded-full mx-2 text-blue-800 cursor-pointer outline outline-1 outline-gray-600 px-3 p-1 text-gray-700" onClick={() => { setAddImage(false) }}>Cancel</div>
                            </div>
                        </div>
                    </div> : null}
                    <div className="w-1/5">
                        <Comment comit={props.showComment} addComit={props.setShowComment} />
                    </div>
                    <div className={`w-3/5 scale-x-${editorScale} print:w-full min-h-screen h-full bg-white outline outline-1 outline-gray-200 border border-gray-300 p-16 pb-0 border border-white`}>
                        <GrammarlyEditorPlugin clientId="client_VbBxTAR6euDX3wam8YLwZe">
                            <div id="print-section" ref={props.editorDiv} onKeyDown={keyDownHandler} contentEditable={true} dangerouslySetInnerHTML={{ __html: editorContent }} className={`w-full h-screen tracking-${tight} font-${fontStyle} outline outline-0 text-${textAlign}`}></div>
                        </GrammarlyEditorPlugin>
                    </div>
                    <div className="w-1/5">
                        <Chat/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Screen;