import Image from "next/image"

export default function CenterSide() {
    return (
        <div className="w-1/4 h-full  border-r-2 border-[#f4f6f8]">
            <div className="py-6 p-2 mx-4 text-3xl font-bold">
                <h1>Inbox</h1>
                <p className="text-[12px] text-gray-500">382 Message . 120 Unread</p>
            </div>
            <div className="flex">
                <div className="flex justify-between bg-[#f6f6f6] p-2 w-2/3 rounded-md mx-4">
                    <Image src={'/mail/search.png'} className="w-[16px] mx-2" width={10} height={10} />
                    <input type="text" placeholder="Search" className="ml-4 w-full outline outline-0 select-none bg-transparent" />
                </div>
                <div className="bg-[#f6f6f6] flex items-center justify-center px-2 rounded-md">
                    <Image src={'/mail/plus.png'} width={30} height={30} />
                </div>
            </div>
            <div className="my-4 px-2 bg-[#f6f6f6] w-fit text-gray-600 mx-4">
                Current
            </div>
            <div id="mails" className="overflow-scroll h-[500px]">
                <div className="my-2">
                    <div className="flex items-center">
                        <div className="bg-blue-700 w-[8px] h-[8px] mx-2 rounded-full"></div>
                        <h3 className="mx-2 text-xl text-gray-700 font-bold">Your audience is growing.</h3>
                        <div className="text-sm text-gray-600">
                            22 June
                        </div>
                    </div>
                    <p className="text-sm ml-8 font-bold text-gray-600">GeeksForGeeks</p>
                    <p className="ml-8 text-gray-700 mr-6">These readers see your story when they visit the medium and search your id.</p>
                </div>
                <div className="my-2">
                    <div className="flex items-center">
                        <div className="bg-blue-700 w-[8px] h-[8px] mx-2 rounded-full"></div>
                        <h3 className="mx-2 text-xl font-bold text-gray-700">Your audience is growing.</h3>
                        <div className="text-sm text-gray-600">
                            22 June
                        </div>
                    </div>
                    <p className="text-sm ml-8 font-bold text-gray-600">GeeksForGeeks</p>
                    <p className="ml-8 text-gray-700 mr-6">These readers see your story when they visit the medium and search your id.</p>
                </div>
                <div className="my-2">
                    <div className="flex items-center">
                        <div className="bg-blue-700 w-[8px] h-[8px] mx-2 rounded-full"></div>
                        <h3 className="mx-2 text-xl font-bold text-gray-700">Your audience is growing.</h3>
                        <div className="text-sm text-gray-600">
                            22 June
                        </div>
                    </div>
                    <p className="text-sm ml-8 font-bold text-gray-600">GeeksForGeeks</p>
                    <p className="ml-8 text-gray-700 mr-6">These readers see your story when they visit the medium and search your id.</p>
                </div>
                <div className="my-2">
                    <div className="flex items-center">
                        <div className="bg-blue-700 w-[8px] h-[8px] mx-2 rounded-full"></div>
                        <h3 className="mx-2 text-xl font-bold text-gray-700">Your audience is growing.</h3>
                        <div className="text-sm text-gray-600">
                            22 June
                        </div>
                    </div>
                    <p className="text-sm ml-8 font-bold text-gray-600">GeeksForGeeks</p>
                    <p className="ml-8 text-gray-700 mr-6">These readers see your story when they visit the medium and search your id.</p>
                </div><div className="my-2">
                    <div className="flex items-center">
                        <div className="bg-blue-700 w-[8px] h-[8px] mx-2 rounded-full"></div>
                        <h3 className="mx-2 text-xl font-bold text-gray-700">Your audience is growing.</h3>
                        <div className="text-sm text-gray-600">
                            22 June
                        </div>
                    </div>
                    <p className="text-sm ml-8 font-bold text-gray-600">GeeksForGeeks</p>
                    <p className="ml-8 text-gray-700 mr-6">These readers see your story when they visit the medium and search your id.</p>
                </div>
                <div className="my-2">
                    <div className="flex items-center">
                        <div className="bg-blue-700 w-[8px] h-[8px] mx-2 rounded-full"></div>
                        <h3 className="mx-2 text-xl font-bold text-gray-700">Your audience is growing.</h3>
                        <div className="text-sm text-gray-600">
                            22 June
                        </div>
                    </div>
                    <p className="text-sm ml-8 font-bold text-gray-600">GeeksForGeeks</p>
                    <p className="ml-8 text-gray-700 mr-6">These readers see your story when they visit the medium and search your id.</p>
                </div>
                <div className="my-2">
                    <div className="flex items-center">
                        <div className="bg-blue-700 w-[8px] h-[8px] mx-2 rounded-full"></div>
                        <h3 className="mx-2 text-xl font-bold text-gray-700">Your audience is growing.</h3>
                        <div className="text-sm text-gray-600">
                            22 June
                        </div>
                    </div>
                    <p className="text-sm ml-8 font-bold text-gray-600">GeeksForGeeks</p>
                    <p className="ml-8 text-gray-700 mr-6">These readers see your story when they visit the medium and search your id.</p>
                </div>
                <div className="my-2">
                    <div className="flex items-center">
                        <div className="bg-blue-700 w-[8px] h-[8px] mx-2 rounded-full"></div>
                        <h3 className="mx-2 text-xl font-bold text-gray-700">Your audience is growing.</h3>
                        <div className="text-sm text-gray-600">
                            22 June
                        </div>
                    </div>
                    <p className="text-sm ml-8 font-bold text-gray-600">GeeksForGeeks</p>
                    <p className="ml-8 text-gray-700 mr-6">These readers see your story when they visit the medium and search your id.</p>
                </div>

            </div>
        </div>
    )
}