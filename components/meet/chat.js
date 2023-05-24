import { useEffect, useRef } from "react"

export default function MySelf() {
    const videoRef = useRef();
    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then((stream) => {
                videoRef.current.srcObject = stream;

            }).catch((stream) => {
                console.log('Something wrong happened.')
                return stream;
            })
    }, [])
    return (
        <div className="bg-white rounded-2xl">
            <video ref={videoRef} id="myScreen" className="rounded-2xl" autoPlay></video>
        </div>
    )
}