import { useRouter } from "next/router"
import NavBar from "../../../components/word/editor/NavBar";
import Screen from "../../../components/word/editor/Screen";
import { useEffect, useRef, useState } from "react";

export default function File() {
    const diff = useRef();
    const editorDiv = useRef();
    const asn = useRef();
    const router = useRouter()
    
    useEffect(() => {
        setInterval(() => {
            timeChange();
        }, 60000)
    }, [])
    const timeChange = () => {
        let editDiff = parseInt(Date.now() / 60000) - diff.current.value;
        asn.current.value = editDiff;
    }
    const [showComment,setShowComment] = useState(false);
    const { slug } = router.query;
    if (slug === 'file') {
        return (
            <div className="relative">
                <input className="hidden" ref={diff} onChange={() => { }} value={parseInt(Date.now() / 60000)} />
                <NavBar editorDiv={editorDiv} lastEdit={asn} setShowComment={setShowComment}/>
                <hr />
                <Screen editorDiv={editorDiv} diff={diff} timeChange={timeChange} showComment={showComment} setShowComment={setShowComment}/>
            </div>
        )
    }
    return (<>
        <div>Error 404</div>
    </>)
}