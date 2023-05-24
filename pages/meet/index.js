import Footer from "../../components/meet/footer";
import Header from "../../components/meet/header";
import MySelf from "../../components/meet/myself";
import Other from "../../components/meet/other";
import SideBar from "../../components/meet/sideBar";
import Chat from "../../components/meet/chat";
import { useState } from "react"

export default function Meet(){
    const [showCamera,setShowCamera] = useState(true)
    const [showMic,setShowMic] = useState(true)
    const [showHand,setShowHand] = useState(true)
    const [showPresent,setShowPresent] = useState(true)
    const [showOption,setShowOption] = useState(true)
    const [showBoard,setShowBoard] = useState(true)
    const [showChat,setShowChat] = useState(true)
    const [showMusic,setShowMusic] = useState(true)
    const [onCall,cutCall] = useState(true)
    
    return (
        <div className="bg-[#1a1225] text-white min-h-screen w-screen h-fit">
            <Header/>
            <div className="flex justify-between w-full h-fit">
                <SideBar/>
                <div className="flex space-x-6 px-20 w-full">
                    <Other/>
                    <div className="space-y-4 pb-4">
                        <MySelf showCamera={showCamera}/>
                        <Chat/>
                    </div>
                </div>
            </div>
            <Footer showCamera={showCamera} setShowCamera={setShowCamera} showMic={showMic}
            setShowMic={setShowMic} showHand={showHand} setShowHand={setShowHand} showPresent={showPresent} setShowPresent={setShowPresent}
            showOption={showOption} setShowOption={setShowOption} showBoard={showBoard} setShowBoard={setShowBoard}
            showChat={showChat} setShowChat={setShowChat} showMusic={showMusic} setShowMusic={setShowMusic}
            onCall={onCall} cutCall={cutCall} />
        </div>
    )
}