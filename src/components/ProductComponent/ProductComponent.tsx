import  {FC} from 'react';
import {IProduct} from "../../models/products.tsx";

type ProductComponentProps = {
    product: IProduct;
}

const ProductComponent: FC<ProductComponentProps> = ({product} ) => {
    return (
        <div className='border flex justify-between items-center h-66'>

            <div className='flex items-center flex-col border w-7/10'>
                <div>
                    <img className='w-45 h-45' src={product.images[0]} alt={`${product.title} ${product.description}`}/>
                </div>
                <div>
                    <h2 className='text-2xl'>{product.title}</h2>
                    <p>{product.description}</p>

                </div>

            </div>
            <div className='flex flex-col justify-between w-3/10 pl-5 h-full'>
                <div className='border'>
                    <p>category: {product.category}</p>
                    <p>price: {product.price}</p>
                    <p>discountPercentage: {product.discountPercentage}</p>
                    <p>stock: {product.stock}</p>
                    <p>brand: {product.brand}</p>

                </div>
                <div className='border'>
                    <p>width {product.dimensions.width}</p>
                    <p>height {product.dimensions.height}</p>
                    <p>depth {product.dimensions.depth}</p>
                </div>
            </div>

        </div>
    );
};

export default ProductComponent;