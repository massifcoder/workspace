import Image from "next/image"
import Files from "./Files"
import Preview from "./Preview"
import SideBar from './SideBar'

export default function Template() {
    return (
        <div className=" px-30">
            <div className="flex justify-center p-4">
                <SideBar/>
                <Files />
                <Preview />
            </div>
        </div>
    )
}