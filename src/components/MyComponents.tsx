import {FC} from "react";

type MyComponentsType = {text: string};

const MyComponents: FC <MyComponentsType> = ({text})=> {
    return (
        <div className='text-3xl font-bold underline'>
            {text}
        </div>
    )
}

export default MyComponents;