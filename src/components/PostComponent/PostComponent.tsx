import {FC} from 'react';
import {IPost} from "../../models/posts.tsx";

type postComponentProps = {
    post: IPost
}

const PostComponent: FC<postComponentProps> = ({post}) => {
    return (
        <div className='border p-5'>
            <h3 className='font-bold'>{post.title}</h3>
            <p>{post.userId}</p>
            <p>{post.body}</p>
            <></>
        </div>
    );
};

export default PostComponent;