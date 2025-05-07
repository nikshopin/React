import {useLocation} from "react-router-dom";
import {IPostDumMyJson} from "../../models/DumMyJson/IPostDumMyJson.tsx";

const SinglePostDumMyJsonComponent = () => {
    const {state} = useLocation();
    const post = state as IPostDumMyJson;
    return (
        <div className={'flex flex-col gap-6'}>
            <h1>{post.title} </h1>
            <p>user-id - {post.userId} </p>
            <p>{post.body}</p>
        </div>
    );
};

export default SinglePostDumMyJsonComponent;