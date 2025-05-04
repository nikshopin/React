import { useEffect, useState} from 'react';
import {GetTodoList} from "../../services/GetTodoList.ts";
import {IToDo} from "../../models/IToDo.tsx";
import {TodoComponent} from "../TodoComponent/TodoComponent.tsx";

const TodoComponents = () => {
    const [todo, setTodo] = useState<IToDo[]|null>(null);
    useEffect(()=>{
        GetTodoList().then(response =>{
            setTodo(response);
        })
    }, [])

    return (
        <div className='m-auto flex-col justify-center items-center w-150'>
            {

                    todo && todo.map((item, index  )=>(
                        <TodoComponent key={index} item={item}/>
                    ))
            }
        </div>
    );
};

export default TodoComponents;