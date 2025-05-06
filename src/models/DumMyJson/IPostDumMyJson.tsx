import {IReactions} from "./IReactions.tsx";


export interface IPostDumMyJson {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: IReactions;
  views: number;
  userId: number;
}