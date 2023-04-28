import { useRouter } from "next/router"
import NavBar from "../../components/NavBar";
import Screen from "../../components/Screen";
import { useEffect, useRef, useState } from "react";

export default function File() {
    const router = useRouter()
    // const [showComment,setShowComment] = useState(false);
    const { slug } = router.query;
    if (slug === 'file') {
        const diff = useRef();
        const asn = useRef();

        const timeChange = () => {
            let editDiff = parseInt(Date.now() / 60000) - diff.current.value;
            asn.current.value = editDiff;
        }

        useEffect(() => {
            setInterval(() => {
                timeChange();
            }, 60000)
        }, [])
        return (
            <div className="relative">
                <input className="hidden" ref={diff} onChange={() => { }} value={parseInt(Date.now() / 60000)} />
                <NavBar lastEdit={asn} />
                <hr />
                <Screen diff={diff} timeChange={timeChange} />
            </div>
        )
    }
    return (<>
        <div>Error 404</div>
    </>)
}