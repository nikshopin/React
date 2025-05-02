import {FC} from "react";
import ICourse from "../models/courses.tsx";

type MyComponentsType = {arrays: ICourse[]};

const MyComponents: FC <MyComponentsType> = ({arrays})=> {
    return (
        <div className='text-3xl  flex gap-25 flex-col'>
            {
                arrays.map((value, index)=>{
                    return(
                        <p  key={index}>
                            course <span className='text-3xl font-bold'>{ value.title}</span> course duration <span className='text-3xl font-bold'>{value.monthDuration}</span> mounth
                        </p>
                    )
                })
            }
        </div>
    )
}

export default MyComponents;