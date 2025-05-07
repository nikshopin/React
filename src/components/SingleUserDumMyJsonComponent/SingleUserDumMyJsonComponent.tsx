import {useLocation} from "react-router-dom";
import {IUserDumMyJson} from "../../models/DumMyJson/IUserDumMyJson.tsx";

const SingleUserDumMyJsonComponent = () => {
    const {state} = useLocation();
    const user = state as IUserDumMyJson;
    return (
        <div className={'flex flex-col gap-6'}>
            <img  className='w-25 pl-25' src={`${user.image}`} alt="{user.firstName} {user.lastName}"/>
            <h1>{user.firstName} {user.lastName} {user.maidenName !== '' ? `- ${user.firstName} ${user.maidenName}` : ''}</h1>
            <p>age - {user.age} phone- {user.phone}</p>
            <p>email - {user.email}</p>

        </div>
    );
};

export default SingleUserDumMyJsonComponent;