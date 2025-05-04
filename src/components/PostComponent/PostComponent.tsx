import {FC} from 'react';
import {IPost} from "../../models/posts.tsx";

type postComponentProps = {
    post: IPost
}

const PostComponent: FC<postComponentProps> = ({post}) => {
    return (
        <div>
            <h3>{post.title}</h3>
            <p>{post.userId}</p>
            <p>{post.body}</p>
            <></>
        </div>
    );
};

export default PostComponent;