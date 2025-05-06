import {IPostDumMyJson} from "../../models/DumMyJson/IPostDumMyJson.tsx";
import {FC} from "react";


type PostDumMyJsonComponentProps = {
    item: IPostDumMyJson;
}
const PostDumMyJsonComponent:FC<PostDumMyJsonComponentProps> = ({item}) => {
    return (
        <div>
            <h2>{item.title}</h2>
        </div>
    );
};

export default PostDumMyJsonComponent;