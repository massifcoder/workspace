import Image from "next/image"

export default function Preview(){
    return (
        <div className="w-1/4 px-6">
            <h1 className="font-bold text-xl text-center my-4">File Preview</h1>
            <div className="m-4 outline outline-2 p-6 outline-gray-300 mt-4 rounded-xl">
                <Image src={'/word/temp/doc.png'} alt="temp" height={260} width={200}/>
            </div>
            <div className="text-xl flex space-x-2 mx-4">
                <Image src={'/word/temp/doc.png'} alt="doc" height={26} width={26}/>
                <div className="font-bold">Design Sprint.docx</div>
            </div>
            <hr className="mt-6 mb-3"/>
            <h1 className="font-bold mb-2">Description</h1>
            <div className="text-gray-600">
                Its also a particularly highly collaborative effort that utilizes the strength of all of the different team members involved.
            </div>
            <hr className="mt-6 mb-3"/>
            <h1 className="font-bold mb-2">Properties</h1>
            <div className="flex text-gray-600 m-2 justify-between">
                <div>Type</div>
                <div className="font-bold">Document</div>
            </div>
            <div className="flex text-gray-600 m-2 justify-between">
                <div>Size</div>
                <div className="font-bold">32KB</div>
            </div>
            <div className="flex text-gray-600 m-2 justify-between">
                <div>Last Modified</div>
                <div className="font-bold">1 Month</div>
            </div>
        </div>
    )
}