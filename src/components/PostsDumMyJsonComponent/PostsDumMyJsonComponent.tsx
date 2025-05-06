import {useEffect, useState} from "react";
import {apiPostsDumMyJson} from "../../services/api.users.dummyjson.tsx";
import PostDumMyJsonComponent from "../PostDumMyJsonComponent/PostDumMyJsonComponent.tsx";
import {IPostsDumMyJson} from "../../models/DumMyJson/IPostsDumMyJson.tsx";

const PostsDumMyJsonComponent = () => {
    const [posts, setPosts] = useState<IPostsDumMyJson|null>(null)


    useEffect(() => {
        apiPostsDumMyJson().then((posts)=>{
            setPosts(posts);
        })
    },[])
    return (
        <div>
            {
                posts && posts.posts.map((item)=> (
                    <PostDumMyJsonComponent key = {item.id} item = {item}/>
                ))
            }
        </div>
    );
};

export default PostsDumMyJsonComponent;