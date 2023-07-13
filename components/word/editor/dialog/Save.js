import { useRouter } from "next/router";

export default function Save(props){

    const router = useRouter();

    const handleSave = ()=>{
        const token = localStorage.getItem('token')
        let name = props.titleRef.current.value;
        const data = props.Edata;
        if(name===''){
            name = 'untitled'
        }
        console.log(data);
        fetch('/api/word/storingFile', { method: 'POST', body: JSON.stringify({
            token : token,
            data : data,
            name : name
        }) })
            .then((resp) => {
                return resp.json();
            }).then((resp) => {
                if (resp.status === true) {
                    router.push('/word')
                }
                return resp
            })
    }

    const cancelHanle = ()=>{
        props.setShowSave(!props.showSave)
    }

    return (
        <div className="z-50 px-6 py-3 border-2 rounded-lg border-gray-700 bg-white">
            <h1 className="text-lg">Enter Name Above</h1>
            <div className="flex justify-between">
                <input onClick={handleSave} className="bg-green-700 text-white my-2 p-2 rounded-md" type="submit" value="Submit"/>
                <input onClick={cancelHanle} className="bg-green-700 text-white my-2 p-2 rounded-md" type="submit" value="Cancel"/>
            </div>
        </div>
    )
}