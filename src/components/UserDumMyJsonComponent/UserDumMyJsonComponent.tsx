import {FC} from "react";
import {IUserDumMyJson} from "../../models/DumMyJson/IUserDumMyJson.tsx";
import {Link, useNavigate} from "react-router-dom";




type UserDumMyJsonComponentProps = {
    item: IUserDumMyJson;
}

const UserDumMyJsonComponent: FC<UserDumMyJsonComponentProps> = ({item}) => {
    const navigateTo = useNavigate();
    const hendelOnClick = () => {
        navigateTo( '/user/cart/'+item.id ,{state: item})
    }
    return (
        <div className={'flex flex-row justify-between p-5'}>
            <h1 className={'underline'}><Link to={'/user/dummyjson/deteils/'+ item.id} state= {item}>
                {item.firstName}  {item.username} {item.email}

            </Link></h1>

            <button className={'px-4 py-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded shadow'} onClick={hendelOnClick}>Buys</button>
        </div>
    );
};

export default UserDumMyJsonComponent;