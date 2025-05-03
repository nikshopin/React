import {IToDo} from "../models/IToDo.tsx";

export const GetTodoList = async ():Promise<IToDo[]> => {
    return  await  fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json());
}