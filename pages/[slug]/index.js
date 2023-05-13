import { useRouter } from "next/router"
import NavBar from "../../components/NavBar";
import Screen from "../../components/Screen";
import { useEffect, useRef, useState } from "react";

export default function File() {
    const diff = useRef();
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
                <NavBar lastEdit={asn} setShowComment={setShowComment}/>
                <hr />
                <Screen diff={diff} timeChange={timeChange} showComment={showComment} setShowComment={setShowComment}/>
            </div>
        )
    }
    return (<>
        <div>Error 404</div>
    </>)
}