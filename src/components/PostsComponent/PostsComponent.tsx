import { useEffect, useState} from 'react';
import {IPost} from "../../models/posts.tsx";
import {ApiRequest} from "../../services/ApiRequest.tsx";
import PostComponent from "../PostComponent/PostComponent.tsx";

const PostsComponent = () => {
    const [posts, setPosts] = useState<IPost[]|null> (null );

    useEffect(()=>{
        ApiRequest(import.meta.env.VITE_BASE_URL_API).then((response)=> {
            setPosts(response)
        });
    },[]);
    console.log(posts);
    return (
        <div className="flex flex-col gap-2 m-auto w-150 jys-center items-center">
            {
                posts && posts.map((item)=>(
                    <PostComponent key = {item.id} post = {item}/>
                ))

            }
        </div>
    );
};

export default PostsComponent;