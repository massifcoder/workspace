import { useRouter } from "next/router"
import NavBar from "../../../components/word/editor/NavBar";
import Screen from "../../../components/word/editor/Screen";
import { useEffect, useRef, useState } from "react";

export default function File() {
    const diff = useRef();
    const editorDiv = useRef();
    const asn = useRef();
    const router = useRouter();
    const [userName,setUserName] = useState('Loading...');
    const [fname,setFname] = useState('Loading...');
    const [showComment, setShowComment] = useState(false);
    useEffect(() => {
        const token = localStorage.getItem('token');
        const name = localStorage.getItem('username');
        const fname = localStorage.getItem('fname');
        setFname(fname);
        setUserName(name);
        if (token === null) {
            router.push('/')
        }
        setInterval(() => {
            timeChange();
        }, 60000)
    }, [])
    const timeChange = () => {
        let editDiff = parseInt(Date.now() / 60000) - diff.current.value;
        asn.current.value = editDiff;
    }
    const { slug } = router.query;
    if (slug === 'file') {
        return (
            <div className="relative">
                <input className="hidden" ref={diff} onChange={() => { }} value={parseInt(Date.now() / 60000)} />
                <NavBar fname={fname} userName={userName} editorDiv={editorDiv} lastEdit={asn} setShowComment={setShowComment} />
                <hr />
                <Screen editorDiv={editorDiv} diff={diff} timeChange={timeChange} showComment={showComment} setShowComment={setShowComment} />
            </div>
        )
    }
    return (<>
        <div>Error 404</div>
    </>)
}