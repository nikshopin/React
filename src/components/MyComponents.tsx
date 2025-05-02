import {FC} from "react";
import ICourse from "../models/courses.tsx";

type MyComponentsType = {arrays: ICourse};

const MyComponents: FC <MyComponentsType> = ({arrays}): Element=> {
    return (
            {
                arrays.map((value)=>{
                    <div className='text-3xl font-bold underline'>
                        value.title
                    </div>
                })
            }
    )
}

export default MyComponents;