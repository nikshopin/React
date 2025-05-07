import {IPostDumMyJson} from "../../models/DumMyJson/IPostDumMyJson.tsx";
import {FC} from "react";
import {Link} from "react-router-dom";


type PostDumMyJsonComponentProps = {
    item: IPostDumMyJson;
}
const PostDumMyJsonComponent:FC<PostDumMyJsonComponentProps> = ({item}) => {
    return (
        <div>
            <Link to = {'/post/dummyjson/deteils/'+ item.id} state={item}>
                <h2>{item.title}</h2>
            </Link>
        </div>
    );
};

export default PostDumMyJsonComponent;