import Image from "next/image"

export default function SideImage(){
    return (
        <div className="w-[400px] flex items-center justify-center">
            <Image className="rounded-xl w-full" src='/home/sideImage.png' alt="image" height={600} width={400} />
        </div>
    )
}