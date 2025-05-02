import {FC} from "react";
import ICourse from "../models/courses.tsx";

type MyComponentsType = {arrays: ICourse};

const MyComponents: FC <MyComponentsType> = ({arrays}): Element=> {
    return (
            <div>
                {
                        arrays.map((value, index)=>{
                            return(
                            <p className='text-3xl font-bold underline'>
                                value.index value.title . value.mounth
                            </p>

                                )
                        })

                }
            </div>
    )
}

export default MyComponents;