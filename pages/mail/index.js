import LeftSide from '../../components/mail/leftSide'
import CenterSide from '../../components/mail/centerSide'
import RightSide from '../../components/mail/rightSide'
import { useEffect, useState } from "react"
import { useRouter } from 'next/router'

export default function Mail() {
    const router = useRouter();
    const [showCompose, setShowCompose] = useState(false)
    const [selected, setSelected] = useState(0);
    const [sendMail, setSetMails] = useState(null);
    const [latMails, setLatMails] = useState(null);
    const [sendSelected, setSendSelect] = useState(0);
    const [showInbox, setShowInbox] = useState(true);

    useEffect(
        () => {
            const fetchData = () => {
                console.log('Verifying data.')
                const token = localStorage.getItem('token');
                const name = localStorage.getItem('username');
                if (token === null || name === null) {
                    router.push('/')
                }
                fetch('/api/mail/receiveMail', { method: 'POST', body: JSON.stringify({ receiver: name }) })
                    .then((value) => {
                        return value.json()
                    }).then((value) => {
                        const mails = value.response;
                        setLatMails(mails);
                        return value;
                    })
                fetch('/api/mail/sentMail', { method: 'POST', body: JSON.stringify({ senderMail: name }) })
                    .then((value) => {
                        return value.json()
                    }).then((value) => {
                        const mails = value.response;
                        setSetMails(mails);
                        return value;
                    })
            }
            fetchData();
            const interval = setInterval(fetchData, 30000);
            return () => clearInterval(interval);
        },
        []);

    return (
        <div className="w-screen bg-[#e3e5e7] p-6 min-h-screen h-fit">
            <div className="rounded-3xl bg-white w-full h-full flex">
                <LeftSide showInbox={showInbox} setShowInbox={setShowInbox} mails={latMails} sendMail={sendMail} setShowCompose={setShowCompose} showCompose={showCompose} />
                <CenterSide sendMail={sendMail} showInbox={showInbox} setSendSelect={setSendSelect} setShowCompose={setShowCompose} mails={latMails} setSelected={setSelected} />
                <RightSide showInbox={showInbox} sendMail={sendMail} showCompose={showCompose} setShowCompose={setShowCompose} sendSelected={sendSelected} selected={selected} mails={latMails} />
            </div>
        </div>
    )
}