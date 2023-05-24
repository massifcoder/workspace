import { useEffect, useRef } from "react"

export default function Other() {
    const videoRef = useRef();
    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then((stream) => {
                if(videoRef.current){
                    videoRef.current.srcObject = stream;
                }

            }).catch((stream) => {
                console.log('Something wrong happened.')
                return stream;
            })
    }, [])
    return (
        <div className="rounded-2xl w-full ">
            <video ref={videoRef} className="w-full rounded-2xl" autoPlay></video>
        </div>
    )
}