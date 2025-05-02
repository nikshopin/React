import  {FC}from 'react';
import {ICoursesArray} from "../../models/CoursesArray.tsx";

type PropsType = {courses: ICoursesArray[]};

const ComponentCourses: FC <PropsType> = ({ courses }) => {
    return (
        <div className='m-auto flex flex-col justify-center items-center max-w-100 '>
            {
                courses.map((value, index)=>(
                    <div className='max-w-288 border w-full px-10 py-10' key={index}>
                        <h1 className='font-bold text-2xl'>{value.title}</h1>
                        <p className=''>month duration {value.monthDuration} month</p>
                        <p className=''>hour duration {value.hourDuration} hours</p>
                        <ul className='list-disc list-inside mt-2 space-y-1 text-left text-sm text-gray-700"'>
                            {value.modules.map((item, ind)=>(
                                <li key={ind}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))
            }
        </div>
    );
};

export default ComponentCourses;