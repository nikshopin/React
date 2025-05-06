import {useEffect, useState} from "react";
import {ICommentsDumMyJson} from "../../models/DumMyJson/ICommentsDumMyJson.tsx";
import {apiCommentsDumMyJson} from "../../services/api.users.dummyjson.tsx";
import CommentDumMyJsonComponent from "../CommentDumMyJsonComponent/CommentDumMyJsonComponent.tsx";

const CommentsDumMyJsonComponent = () => {
    const [comments, setComments] = useState<ICommentsDumMyJson|null>(null);

    useEffect(()=>{
        apiCommentsDumMyJson().then((comments)=>{
            setComments(comments)
        })
    },[])

    return (
        <div>
            {
                comments && comments.comments.map((item)=> (
                    <CommentDumMyJsonComponent key = {item.id} item = {item}/>
                ))
            }

        </div>
    );
};

export default CommentsDumMyJsonComponent;