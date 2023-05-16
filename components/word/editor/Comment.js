import { useState } from "react";
import Card from "./Card";
import CardInput from "./CardInput";

export default function Comment(props){

    const [comments,setComment] = useState([]);

    return (
        <div className="items-start p-4 bg-[#f9fbfd]">
            {comments.length ? <h1 className="text-center text-2xl text-gray-700 m-2 bg-[#c2e7ff] rounded-full p-2">Comments</h1> : null}
            {props.comit ? <CardInput addComit={props.addComit} setComment={setComment} comments={comments}/> : null }
            {comments.map((value,index)=>{
                return <Card key={index} comment={value}/>
            })}
        </div>
    )
}