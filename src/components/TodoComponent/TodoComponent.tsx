import  {FC} from 'react';
import {IToDo} from "../../models/IToDo.tsx";

type TodoComponentProps = {
    item: IToDo
}

const TodoComponent: FC<TodoComponentProps> = ({item}) => {
    return (
        <div className='border p-10 w-full flex flex-col  items-center'>
                <h2 className='text-2xl bold'>{item.title}</h2>
                <p>task user - {item.userId}</p>
                <p>status - {item.completed ? 'completed' : 'in process'}</p>
        </div>
    );
};

export  {
    TodoComponent
};