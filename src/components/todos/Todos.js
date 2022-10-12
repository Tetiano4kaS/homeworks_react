import {useState, useEffect} from "react";
import Todo from "../todo/Todo";
const Todos = () => {
    let [todo, setTodos] = useState([]);

    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(value => value.json())
        .then(value => {setTodos(value)})
},[])

    return (<div>{
        todo.map((user, index) => <Todo user={user} key={index}/>)}
    </div>);

};
export {Todos};
