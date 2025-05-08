import {FC} from "react";
import {IProducts} from "../../models/DumMyJson/IProducts.tsx";

type userCartProps = {
    userCart: IProducts;
}

const UserCartDumMyJsonComponent: FC<userCartProps> = ({userCart}) => {
    return (
        <div className={'border'}>
            {userCart?.title?.trim() ? (
                <>
                <h4>{userCart.title}</h4>
                <p>id - {userCart.id}</p>
                <p>price - {userCart.price}</p>
                <p>discountTotal - {userCart.discountedTotal}</p>
                <p>discountPercentage - {userCart.discountPercentage}</p>
                <p>quantity - {userCart.quantity}</p>
                <img src={userCart.thumbnail}   alt={userCart.title}/>
                </>
            ) : (
                <h2>The user has no purchases </h2>
            )}

        </div>
    );
};

export default UserCartDumMyJsonComponent;