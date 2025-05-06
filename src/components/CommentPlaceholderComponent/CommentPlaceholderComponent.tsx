import {ICommentPlaceholder} from "../../models/JsonPlaceholder/ICommentPlaceholder.tsx";
import {FC} from "react";

type CommentPlaceholderComponentProps = {
    item: ICommentPlaceholder;
}

const CommentPlaceholderComponent:FC<CommentPlaceholderComponentProps> = ({item}) => {
    return (
        <div>
            <h2>{item.name}</h2>
        </div>
    );
};

export default CommentPlaceholderComponent;