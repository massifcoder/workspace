import { useEffect, useRef } from "react"

export default function MySelf(props) {
    const videoRef = useRef();
    useEffect(() => {
        if (props.showCamera) {
            if (videoRef.current) {
                navigator.mediaDevices.getUserMedia({ video: true })
                    .then((stream) => {
                        if (videoRef.current) {
                            videoRef.current.srcObject = stream;
                        }

                    }).catch((stream) => {
                        console.log('Something wrong happened.')
                        return stream;
                    })
            }
        }
        else {
        }
    }, [])
    return (
        <div className="bg-white rounded-2xl">
            <video ref={videoRef} className="rounded-2xl bg-red-300" autoPlay></video>
        </div>
    )
}