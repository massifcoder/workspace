import { useRouter } from "next/router"
import NavBar from "../../../../components/word/editor/NavBar";
import Screen from "../../../../components/word/editor/Screen";
import { useEffect, useRef, useState } from "react";

export default function File() {
    const diff = useRef(null);
    const editorDiv = useRef(null);
    const asn = useRef(null);
    const router = useRouter(null);
    const [data,setData] = useState('');
    let preData = '';
    const [userName,setUserName] = useState('Loading...');
    const [fname,setFname] = useState('Loading...');
    const [showComment, setShowComment] = useState(false);
    const [tokens,setToken] = useState(null);
    useEffect(() => {
        const token = localStorage.getItem('token');
        setToken(token);
        const name = localStorage.getItem('username');
        const fname = localStorage.getItem('fname');
        setFname(fname);
        setUserName(name);
        if (token === null) {
            router.push('/')
        }
        const clr = setInterval(() => {
            timeChange();
        }, 60000)

        return ()=> clearInterval(clr);
    },[router])
    
    const timeChange = () => {
        let fd = diff.current.value ? diff.current.value : 0;        
        let editDiff = parseInt(Date.now() / 60000) - parseInt(fd);
        asn.current.value = editDiff;
    }
    const { slug } = router.query;
    if (slug && slug[0] === tokens && slug[1]) {

        if(slug[1]==='resume'){
            preData = '<main style="font-family: Arial, sans-serif; margin: 0; padding: 20px;"><div style="text-align: center; margin-bottom: 20px;"><h1 style="font-size: 24px; font-weight: bold;">Your Name</h1><p style="font-size: 16px; margin-bottom: 10px;">Email: your-email@example.com | Phone: (123) 456-7890</p></div><section style="margin-bottom: 20px;"><h2 style="font-size: 20px; margin-bottom: 10px;">Summary</h2><p style="font-size: 14px;">A brief summary of your skills, experience, and career goals.</p></section><section style="margin-bottom: 20px;"><h2 style="font-size: 20px; margin-bottom: 10px;">Experience</h2><h3 style="font-size: 16px; margin-bottom: 5px;">Job Title</h3><p style="font-size: 14px;"><strong>Company Name</strong> | City, State</p><p style="font-size: 14px;"><em>Start Date - End Date</em></p><ul style="font-size: 14px;"><li>Responsibility or achievement</li><li>Responsibility or achievement</li><li>Responsibility or achievement</li></ul></section><section style="margin-bottom: 20px;"><h2 style="font-size: 20px; margin-bottom: 10px;">Education</h2><h3 style="font-size: 16px; margin-bottom: 5px;">Degree</h3><p style="font-size: 14px;"><strong>University Name</strong> | City, State</p><p style="font-size: 14px;"><em>Graduation Year</em></p></section><section style="margin-bottom: 20px;"><h2 style="font-size: 20px; margin-bottom: 10px;">Skills</h2><ul style="font-size: 14px;"><li>Skill 1</li><li>Skill 2</li><li>Skill 3</li></ul></section></main>'
        }
        else if(slug[1]==='letter'){
            preData = ' <main style="font-family: Arial, sans-serif; margin: 0; padding: 20px;"><header style="text-align: center; margin-bottom: 20px;"><h1 style="font-size: 24px; font-weight: bold;">Letter Title</h1><p style="font-size: 16px; margin-bottom: 10px;">Senders Name</p><p style="font-size: 16px;">Recipient\'s Name</p>       <p style="font-size: 16px;">Date</p>     </header>      <section>       <p style="font-size: 14px;">Dear Recipient\'s Name,</p>        <p style="font-size: 14px;">This is the content of the letter. You can write your message or information here.</p>        <p style="font-size: 14px;">Sincerely,</p>       <p style="font-size: 14px;">Sender\'s Name</p>     </section>   </main>'
        }
        else if(slug[1]==='profession'){
            preData = '<main style="font-family: Arial, sans-serif; margin: 0; padding: 20px;">     <header style="text-align: center; margin-bottom: 20px;">       <h1 style="font-size: 24px; font-weight: bold;">Project Proposal</h1>       <p style="font-size: 16px; margin-bottom: 10px;">Company Name</p>       <p style="font-size: 16px;">Date</p>     </header>      <section>       <h2 style="font-size: 20px;">Project Overview</h2>       <p style="font-size: 14px;">Provide a brief overview of the project and its objectives.</p>     </section>      <section>       <h2 style="font-size: 20px;">Scope of Work</h2>       <p style="font-size: 14px;">Outline the specific tasks and deliverables required for the project.</p>     </section>      <section>       <h2 style="font-size: 20px;">Timeline</h2>       <p style="font-size: 14px;">Present a detailed timeline indicating project milestones and deadlines.</p>     </section>      <section>       <h2 style="font-size: 20px;">Budget</h2>       <p style="font-size: 14px;">Provide a breakdown of the estimated project costs and resources required.</p>     </section>      <section>       <h2 style="font-size: 20px;">Evaluation and Approval</h2>       <p style="font-size: 14px;">Outline the evaluation criteria and process for approving the project proposal.</p>     </section>      <footer style="text-align: center; margin-top: 20px;">       <p style="font-size: 14px;">Thank you for considering our proposal.</p>       <p style="font-size: 14px;">Company Name</p>     </footer>   </main>'
        }
        else if(slug[1]==='file'){
            preData = ''
        }
        else{
            preData = 'l'
        }

            return (
            <div className="relative">
                <input className="hidden" ref={diff} onChange={() => { }} value={parseInt(Date.now() / 60000)} />
                <NavBar editorDivRef={editorDiv} preData={preData} tit={slug[1]} fname={fname} userName={userName} Edata={data} lastEdit={asn} setShowComment={setShowComment} />
                <hr />
                <Screen ref={editorDiv} slug={slug} preData={preData} setData={setData} diff={diff} timeChange={timeChange} showComment={showComment} setShowComment={setShowComment} />
            </div>
        )
    }
    return (<>
        <div>Error 4043</div>
    </>)
}