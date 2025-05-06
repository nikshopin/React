import {FC} from "react";
import {ICommentDumMyJson} from "../../models/DumMyJson/ICommentDumMyJson.tsx";

type CommentDumMyJsonComponentProps = {
    item: ICommentDumMyJson ;
}

const CommentDumMyJsonComponent: FC<CommentDumMyJsonComponentProps> = ({item}) => {
    return (
        <div>
            <h2>{item.body}</h2>
        </div>
    );
};

export default CommentDumMyJsonComponent;