import {IProducts} from "./IProducts.tsx";


export interface  IUserCartDumMyJson{
  id: number;
  products: IProducts[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}