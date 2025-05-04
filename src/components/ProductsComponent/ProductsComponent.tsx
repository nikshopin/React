import  {useEffect, useState} from 'react';
import {IProduct, IProducts} from "../../models/products.tsx";
import {ApiRequest} from "../../services/ApiRequest.ts";
import ProductComponent from "../ProductComponent/ProductComponent.tsx";

const ProductsComponent = () => {
    const [products, setProducts] = useState<IProduct []|null>(null);

    useEffect(() => {
        ApiRequest(import.meta.env.VITE_URL_BASE_API).then((response:IProducts)=>{
            setProducts(response.products)
        })
    },[])

    return (
        <div className="w-auto flex-col gap-4 p-10  items-center justify-center">
            {
                products && products.map((item , index) => (
                    <ProductComponent key={index} product={item}/>
                ))
            }

        </div>
    );
};

export default ProductsComponent;