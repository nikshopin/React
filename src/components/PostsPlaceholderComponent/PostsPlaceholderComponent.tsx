import {useEffect, useState} from "react";
import {IPostPlaceholder} from "../../models/JsonPlaceholder/IPost.tsx";
import PostPlaceholderComponent from "../PostPlaceholderComponent/PostPlaceholderComponent.tsx";
import {apiPostsPlaceholder} from "../../services/api.users.placeholder.tsx";

const PostsPlaceholderComponent = () => {
    const [posts, setPosts] = useState<IPostPlaceholder[]|null>(null);

    useEffect(() => {
        apiPostsPlaceholder().then((posts)=>{
            setPosts(posts)
        })
    },[])

    return (
        <div>
            {
                posts && posts.map((item)=> (
                    <PostPlaceholderComponent key = {item.id} item = {item}/>
                ))
            }
        </div>
    );
};

export default PostsPlaceholderComponent;