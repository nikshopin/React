import {ICommentUser} from "./ICommentUser.tsx";


export interface ICommentDumMyJson  {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: ICommentUser;
}