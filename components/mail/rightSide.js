import Image from "next/image"

export default function RightSide() {
    return (
        <div className="w-2/4 h-full p-3 pl-6 pr-12">
            <div className="p-8 flex items-center justify-between">
                <div className="w-1/3">
                    <Image src={'/mail/larrow.png'} height={20} width={20} />
                </div>
                <div className="flex items-center text-gray-600 justify-between w-1/3">
                    2 of 382
                </div>
                <div>
                    <Image src={'/mail/delete.png'} height={20} width={20} />
                </div>
            </div>
            <hr />
            <div className="flex items-center w-full mt-4">
                <div>
                    <Image src='/word/user.png' alt="user" width={45} height={45} />
                </div>
                <div className="w-full">
                    <div className="flex items-center text-xl px-6 w-full justify-between">
                        <h1 className="font-bold text-gray-800">Wahyu Siburan</h1>
                        <p className="text-sm">2022, June, 10</p>
                    </div>
                    <div className="flex items-center text-md px-6 w-full justify-between">
                        <h1 className="text-gray-700 text-sm">From: wahyusiburan@gmail.com To: Me</h1>
                        <div className="flex items-center justify-between w-1/3">
                            <Image src={'/mail/ystar.png'} width={20} height={20} />
                            <Image src={'/mail/reply.png'} width={20} height={20} />
                            <Image src={'/mail/reply-all.png'} width={20} height={20} />
                            <Image src={'/mail/forward.png'} width={20} height={20} />
                            <Image src={'/mail/dots.png'} width={20} height={20} />
                        </div>
                    </div>
                </div>
            </div>
            <hr className="my-4" />
            <div className="text-2xl font-bold text-gray-800">
                Web design requirement for travel website
            </div>
            <div className="text-gray-600 py-4 pr-12">
                Hello Asal Design!,<br /><br />
                I contacted you to ask if you are interested and willing to help me with my website design. Work is still ongoing and it's starting on Figma. If you were interested, let me know if we can chat for a bit and how much you usually charge.
                <br /><br />
                Hope to hear from you soon.
                <br /><br />
                Regards
                <br />
                Wahyi Siburan
            </div>
            <div>
                <hr />
                <div className="flex items-center justify-between">
                    <h1 className="font-bold text-xl my-6">Attachments</h1>
                    <h1 className="text-blue-800 text-md font-bold">Download All</h1>
                </div>
                <div className="flex flex-wrap">
                    <div className="w-fit flex mx-4 bg-[#f5f5f5] p-2 rounded-xl">
                        <Image src={'/mail/page.png'} className="" width={20} height={20} />
                        <div className="mx-4">
                            <h1>Inquiry.pdf</h1>
                            <p>3.7 MB . PDF</p>
                        </div>
                    </div>
                    <div className="w-fit flex mx-4 bg-[#f5f5f5] p-2 rounded-xl">
                        <Image src={'/mail/page.png'} width={20} height={20} />
                        <div className="mx-4">
                            <h1>DetailProject.pdf</h1>
                            <p>3.7 MB . PDF</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}