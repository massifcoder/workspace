import Image from "next/image"

export default function CenterSide(props) {

    const mailClick = (index) => {
        if(props.showInbox){
            props.setSelected(index);
            if (props.mails[index].seen === false) {
                props.mails[index].seen = true;
                fetch('/api/mail/markSeen', { method: 'POST', body: JSON.stringify({ ids: props.mails[index]._id }) })
            }
        }
        else{
            props.setSendSelect(index);
        }
    }

    return (
        <div className="w-1/4 h-full  border-r-2 border-[#f4f6f8]">
            <div className="py-6 p-2 mx-4 text-3xl font-bold">
                <h1>Inbox</h1>
                <p className="text-[12px] text-gray-500">382 Message . 120 Unread</p>
            </div>
            <div className="flex">
                <div className="flex justify-between bg-[#f6f6f6] p-2 w-2/3 rounded-md mx-4">
                    <Image alt="ser" src={'/mail/search.png'} className="w-[16px] mx-2" width={10} height={10} />
                    <input type="text" placeholder="Search" className="ml-4 w-full outline outline-0 select-none bg-transparent" />
                </div>
                <div onClick={() => { props.setShowCompose(true) }} className="bg-[#f6f6f6] flex items-center justify-center px-2 rounded-md">
                    <Image alt="plus" src={'/mail/plus.png'} width={30} height={30} />
                </div>
            </div>
            <div className="my-4 px-2 bg-[#f6f6f6] w-fit text-gray-600 mx-4">
                Current
            </div>
            <div id="mails" className="overflow-scroll h-[500px]">

                {
                    props.showInbox ? props.mails === null ?  <div className="font-bold text-center my-4 text-xl">Loading...</div>
                    :  props.mails.map((value, index) => {
                        const desc = value.mail.description.slice(0, 50) + '...';
                        return (
                            <div key={index} onClick={() => { mailClick(index) }} className={`m-2 p-2 outline outline-1 rounded-xl hover:outline-blue-500 outline-gray-300 ${value.seen ? 'bg-white' : 'bg-gray-100'}`}>
                                <div className="flex items-center">
                                    <div className="bg-blue-700 w-[8px] h-[8px] mx-2 rounded-full"></div>
                                    <div className="flex justify-between w-full">
                                        <h3 className="mx-2 text-xl text-gray-700 font-bold">{value.mail.heading}</h3>
                                        <div className="text-sm text-right w-1/3 text-gray-600 px-1">
                                            22 June
                                        </div>
                                    </div>
                                </div>
                                <p className="text-sm ml-8 font-bold text-gray-600">{value.mail.sender}</p>
                                <div className="ml-8 text-gray-700 mr-6" dangerouslySetInnerHTML={{ __html: desc }}></div>
                            </div>
                        )
                    })  :  props.sendMail === null ?  <div className="font-bold text-center my-4 text-xl">Loading...</div>
                    :  props.sendMail.map((value, index) => {
                        const desc = value.mail.description.slice(0, 50) + '...';
                        return (
                            <div key={index} onClick={() => { mailClick(index) }} className={`m-2 p-2 outline outline-1 rounded-xl hover:outline-blue-500 outline-gray-300 ${value.seen ? 'bg-white' : 'bg-gray-100'}`}>
                                <div className="flex items-center">
                                    <div className="bg-blue-700 w-[8px] h-[8px] mx-2 rounded-full"></div>
                                    <div className="flex justify-between w-full">
                                        <h3 className="mx-2 text-xl text-gray-700 font-bold">{value.mail.heading}</h3>
                                        <div className="text-sm text-right w-1/3 text-gray-600 px-1">
                                            22 June
                                        </div>
                                    </div>
                                </div>
                                <p className="text-sm ml-8 font-bold text-gray-600">{value.mail.sender}</p>
                                <div className="ml-8 text-gray-700 mr-6" dangerouslySetInnerHTML={{ __html: desc }}></div>
                            </div>
                        )
                    }) 
                }

            </div>
        </div>
    )
}