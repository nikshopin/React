import {useEffect, useState} from "react";
import {ICommentPlaceholder} from "../../models/JsonPlaceholder/ICommentPlaceholder.tsx";
import {apiCommentsPlaceholder} from "../../services/api.users.placeholder.tsx";
import CommentPlaceholderComponent from "../CommentPlaceholderComponent/CommentPlaceholderComponent.tsx";

const CommentsPlaceholderComponent = () => {
    const [comments, setComments] = useState<ICommentPlaceholder[]|null>(null);

    useEffect(() => {
        apiCommentsPlaceholder().then((comments)=>{
            setComments(comments)
        })
    },[])

    return (
        <div>
            {
                comments && comments.map((item)=> (
                    <CommentPlaceholderComponent key = {item.id} item = {item}/>
                ))
            }
        </div>
    );
};

export default CommentsPlaceholderComponent;