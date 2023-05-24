import Image from "next/image"
import Compose from "./working/compose"

export default function RightSide(props) {


    if(props.mails !== null && props.sendMail !== null ){
        return (
            <div className="w-2/4 h-full p-3 pl-6 pr-12">
                {props.showCompose? <Compose setShowCompose={props.setShowCompose}/>:null}
                <div className="p-8 flex items-center justify-between">
                    <div className="w-1/3">
                        <Image alt="ad" src={'/mail/larrow.png'} height={20} width={20} />
                    </div>
                    <div className="flex items-center text-gray-600 justify-between w-1/3">
                        20 of Total
                    </div>
                    <div>
                        <Image alt="de" src={'/mail/delete.png'} height={20} width={20} />
                    </div>
                </div>
                <hr />
                <div className="flex items-center w-full mt-4">
                    <div>
                        <Image src='/word/user.png' alt="user" width={45} height={45} />
                    </div>
                    <div className="w-full">
                        <div className="flex items-center text-xl px-6 w-full justify-between">
                            <h1 className="font-bold text-gray-800">{ props.showInbox ? ( props.mails.length >0 ? props.mails[props.selected].mail.sender : null) : (props.sendMail.length>0 ? props.sendMail[props.sendSelected].mail.sender : null) }</h1>
                            <p className="text-sm">2022, June, 10</p>
                        </div>
                        <div className="flex items-center text-md px-6 w-full justify-between">
                            <h1 className="text-gray-700 text-sm">From: { props.showInbox ? ( props.mails.length >0 ? props.mails[props.selected].mail.senderMail : null ) : ( props.sendMail.length>0 ? props.sendMail[props.sendSelected].mail.senderMail : null)} To: { props.showInbox ? ( props.mails.length>0 ? props.mails[props.selected].mail.receiver : null) : ( props.sendMail.length>0 ? props.sendMail[props.sendSelected].mail.receiver : null)}</h1>
                            <div className="flex items-center justify-between w-1/3">
                                <Image alt="syar" src={'/mail/ystar.png'} width={20} height={20} />
                                <Image alt="syar" src={'/mail/reply.png'} width={20} height={20} />
                                <Image alt="syar" src={'/mail/reply-all.png'} width={20} height={20} />
                                <Image alt="syar" src={'/mail/forward.png'} width={20} height={20} />
                                <Image alt="syar" src={'/mail/dots.png'} width={20} height={20} />
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-4" />
                <div className="text-2xl font-bold text-gray-800">
                    { props.showInbox ?  ( props.mails.length>0 ? props.mails[props.selected].mail.heading:null) : ( props.sendMail.length>0 ? props.sendMail[props.sendSelected].mail.heading : null)}
                </div>
                <div className="text-gray-600 py-4 pr-12"  dangerouslySetInnerHTML={{ __html:   props.showInbox ?  ( props.mails.length>0 ? props.mails[props.selected].mail.description:null) : ( props.sendMail.length>0 ? props.sendMail[props.sendSelected].mail.description : null) }}>
                </div>
                <div>
                    <hr />
                    <div className="flex items-center justify-between">
                        <h1 className="font-bold text-xl my-6">Attachments</h1>
                        <h1 className="text-blue-800 text-md font-bold">Download All</h1>
                    </div>
                    <div className="flex flex-wrap">
                        { props.showInbox ?

                            ( props.mails.length>0 ? (props.mails[props.selected].mail.attachments ? props.mails[props.selected].mail.attachments.map((value, index) => {
                            return (<div key={index} className="w-fit flex mx-4 bg-[#f5f5f5] p-2 rounded-xl">
                                <Image alt="page" src={'/mail/page.png'} className="" width={20} height={20} />
                                <div className="mx-4">
                                    <h1 className="text-md">{value.name}</h1>
                                    <p className="text-sm">{value.size}</p>
                                </div>
                            </div>)
                        }) : null) : null )

                        :
                        ( props.sendMail.length>0 ? ( props.sendMail[props.sendSelected].mail.attachments ? props.sendMail[props.sendSelected].mail.attachments.map((value, index) => {
                            return (<div key={index} className="w-fit flex mx-4 bg-[#f5f5f5] p-2 rounded-xl">
                                <Image alt="page" src={'/mail/page.png'} className="" width={20} height={20} />
                                <div className="mx-4">
                                    <h1 className="text-md">{value.name}</h1>
                                    <p className="text-sm">{value.size/1000} Kb</p>
                                </div>
                            </div>)
                        }) : null) 
                        : null
                        )
                    }
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            {props.showCompose? <Compose setShowCompose={props.setShowCompose}/>:null}
        </div>
    );

}