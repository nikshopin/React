import {IComment} from "../../models/comments.tsx";
import {useEffect, useState} from "react";
import {commentsResponse} from "../../services/requestApi.tsx";
import GetCommentComponent from "../GetCommentComponent/GetCommentComponent.tsx";

const GetCommentsComponent = () => {
    const [comments, setComments] = useState<IComment[]|null>(null);

    useEffect(() => {
        commentsResponse(import.meta.env.VITE_BASE_URL_COMPONENTS).then((response: IComment[]) => {
            setComments(response)
        })
    })
    return (
        <div className='flex flex-col m-auto justify-center items-center w-150'>
            {
                comments && comments.map((item: IComment) => (
                    <GetCommentComponent item = {item}/>
                ))
            }
        </div>
    );
};

export default GetCommentsComponent;