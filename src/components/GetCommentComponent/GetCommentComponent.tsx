import {FC} from 'react';
import {IComment} from "../../models/comments.tsx";

type GetCommentComponentType = {item: IComment};

const GetCommentComponent: FC<GetCommentComponentType> = ({item}) => {
    return (
        <div className='border w-full flex flex-col items-center m-5 p-4'>
            <h3 className='text-2xl font-bold' >{item.user.fullName}</h3>
            <p>user write - {item.user.id}-{item.user.username}</p>
            <p>post_id {item.postId}</p>
            <p>Likes {item.likes}</p>
            <p className=''>{item.body}</p>
        </div>
    );
};

export default GetCommentComponent;