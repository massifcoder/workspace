import { useRouter } from "next/router"

export default function Option(props) {

    const router = useRouter();

    const New = () => {
        router.push('/word')
    }
    const Save = () => {
        props.setShowSave(!props.showSave);
        props.titleRef.current.focus();
    }

    const Open = () => {
        router.push('/word')
    }
    const Share = () => {
        props.shareHandle(true);
    }
    const Email = () => {
        props.shareHandle(true);
    }
    const Download = async () => {
        if(!props.editorDiv || !props.editorDiv.current){
            return;
        }
        const htmlfile = props.editorDiv.current.outerHTML;
        var header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com;office:word' xmlns='http://www.w3.ord/TR/REC-html40'>" + 
        "<head>" +
            "<meta charset='urf-8'>" +
            "<title>Export HTML to Word</title>" +
        "</head>"+
        "<body>"
        var footer = "</body></html>"
        var sourceHTML = header + htmlfile + footer
        var source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
        var link = document.createElement('a');
        link.href=source;
        link.download='document.doc'
        link.click()
    }

    const Rename = () => {
        props.titleRef.current.focus();
    }
    const Trash = () => {
        router.push('/word')
    }
    const Print = () => {
        window.print();
    }
    const Preview = () => {
        window.print();
    }
    const Setup = () => {
        window.print();
    }

    const clickHandle = () => {
        if (props.option === 'New') {
            New();
        }
        else if (props.option === 'Save') {
            Save();
        }
        else if (props.option === 'Open') {
            Open();
        }
        else if (props.option === 'Share') {
            Share();
        }
        else if (props.option === 'Email') {
            Email();
        }
        else if (props.option === 'Download') {
            Download();
        }
        else if (props.option === 'Rename') {
            Rename();
        }
        else if (props.option === 'Move to Trash') {
            Trash();
        }
        else if (props.option === 'Print') {
            Print();
        }
        else if (props.option === 'Page Setup') {
            Setup();
        }
        else if (props.option === 'Page Preview') {
            Preview();
        }
        else if (props.option === 'Undo') {
            document.execCommand('undo');
        }
        else if (props.option === 'Redo') {
            document.execCommand('redo');
        }
        else if (props.option === 'Cut') {
            const selection = window.getSelection();
            if (selection.toString().length > 0) {
                navigator.clipboard.writeText(selection.toString());
            }
        }
        else if (props.option === 'Copy') {

            navigator.clipboard.writeText(content)
        }
    }

    return (
        <div onClick={() => { clickHandle(); props.onclick() }} className="mx-4 select-none hover:bg-gray-300 w-40 p-1 px-2 my-1 rounded-md">
            {props.option}
            </div>
    )
}