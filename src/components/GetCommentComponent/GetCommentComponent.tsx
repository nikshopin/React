import {FC} from 'react';
import {IComment} from "../../models/comments.tsx";

type GetCommentComponentType = {item: IComment};

const GetCommentComponent: FC<GetCommentComponentType> = ({item}) => {
    return (
        <div key={item.id} className='border w-full flex flex-col items-center m-5 p-4'>
            <h3 className='text-2xl font-bold' >{item.name}</h3>
            <p>user write - {item.postId}</p>
            <p>{item.email}</p>
            <p className=''>{item.body}</p>
        </div>
    );
};

export default GetCommentComponent;