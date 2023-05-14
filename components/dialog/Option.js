import { useRouter } from "next/router"
import * as docx from 'docx'

export default function Option(props){
    
    const router = useRouter();

    const New = () =>{
        router.push('/newFile')
    }
    const Save = () => {
        fetch('/saveFile',{method:'POST',body:JSON.stringify()})
        .then((resp)=>{
            return resp.json();
        }).then((resp)=>{
            if(resp.exp===true){
                router.push('/')
            }
            return resp
        })
    }
    const Open = () =>{
        router.push('/')
    }
    const Share = () =>{
        props.shareHandle(true);
    }
    const Email = () =>{
        props.shareHandle(true);
    }
    const Download = ()=>{
        const doc = new docx.Document();
    }
    const Rename = () =>{
        props.titleRef.current.focus();
    }
    const Move = () =>{
        props.shareHandle(true);
    }
    const Trash = () =>{
        router.push('/')
    }
    const Print = () =>{
        window.print();
    }
    const Preview = ()=>{
        window.print();
    }
    const Setup = ()=>{
        window.print();
    }

    const clickHandle = () => {
        if (props.option ==='New'){
            New();
        }
        else if(props.option ==='Save'){
            Save();
        }
        else if(props.option === 'Open'){
            Open();
        }
        else if(props.option ==='Share'){
            Share();
        }
        else if(props.option ==='Email'){
            Email();
        }
        else if(props.option ==='Download'){
            Download();
        }
        else if(props.option ==='Rename'){
            Rename();
        }
        else if(props.option ==='Move'){
            Move();
        }
        else if(props.option ==='Move to Trash'){
            Trash();
        }
        else if(props.option ==='Print'){
            Print();
        }
        else if(props.option ==='Page Setup'){
            Setup();
        }
        else if(props.option ==='Page Preview'){
            Preview();
        }
        else if(props.option ==='Undo'){
            document.execCommand('undo');
        }
        else if(props.option ==='Redo'){
            document.execCommand('redo');
        }
        else if(props.option === 'Cut'){
            const selection = window.getSelection();
            if(selection.toString().length>0){
                navigator.clipboard.writeText(selection.toString());
            }
        }
        else if(props.option ==='Copy'){
            
            navigator.clipboard.writeText(content)
        }
    }

    return (
        <div onClick={()=>{ clickHandle(); props.onclick()}} className="mx-4 select-none hover:bg-gray-300 w-40 p-1 px-2 my-1 rounded-md">{props.option}</div>
    )
}