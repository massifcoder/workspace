import Link from "next/link";

export default function SideBar(){
    return(
        <div className="w-1/5 p-4 select-none text-center h-80 flex flex-col space-y-4 pt-8">
            <Link href={'/word'}>
                <div className="bg-blue-500 p-2 rounded-xl text-white font-bold">Docs</div>
            </Link>
            <Link href={'/meet'}>
                <div className="hover:bg-blue-500 p-2 rounded-xl bg-gray-200 text-black font-bold">Meet</div>
            </Link>
            <Link href={'/slides'}>
                <div className="hover:bg-blue-500 p-2 rounded-xl bg-gray-200 text-black font-bold">Slides</div>
            </Link>
            <Link href={'/form'}>
                <div className="hover:bg-blue-500 p-2 rounded-xl bg-gray-200 text-black font-bold">Form</div>
            </Link>
            <Link href={'/mail'}>
                <div className="hover:bg-blue-500 p-2 rounded-xl bg-gray-200 text-black font-bold">Mail</div>
            </Link>
        </div>
    )
}