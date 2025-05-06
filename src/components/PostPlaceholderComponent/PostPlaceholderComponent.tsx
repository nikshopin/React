import {FC} from "react";
import {IPostPlaceholder} from "../../models/JsonPlaceholder/IPost.tsx";

type PostPlaceholderComponentProps = {
    item: IPostPlaceholder;
}

const PostPlaceholderComponent: FC<PostPlaceholderComponentProps> = ({item}) => {
    return (
        <div>
            <h2>{item.title}</h2>
        </div>
    );
};

export default PostPlaceholderComponent;