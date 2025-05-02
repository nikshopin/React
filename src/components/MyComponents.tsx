import {FC} from "react";

type MyComponentsType = { arrayCourses: string[] };

const MyComponents: FC <MyComponentsType> = ({arrayCourses}) => {
    return (
        <div className='text-3xl font-bold flex gap-4 flex-col' >
            {
                arrayCourses.map((cours: string, index: number) => {
                    return (
                        <p key={index}>{cours}</p>
                    )
                })
            }
        </div>
    )
}

export default MyComponents;