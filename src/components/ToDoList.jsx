import React, { useState } from 'react'
import ToDo from './ToDo';
import Form from './Form';

function ToDoList(props) {
const [todos, setTodos] = useState([]);
const addToDo = (todo) => {
    if(!todo.text || /^\s*$/.test(todo.text)){
        return
    }

    const newTodos = [todo, ...todos]
    setTodos(newTodos)
}

const updateTodo = (todoId, newValue) => {
    if(!newValue.text || /^\s*$/.test(newValue.text)){
        return;
    }
    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
}

const removeTodo = id => {
const removeArr = [...todos].filter(todo => todo.id !== id)
setTodos(removeArr);
};



const completeTodo = id => {
    let updatedTodos = todos.map((todo) => {
        if(todo.id === id){
            todo.isComplete =!todo.isComplete
        }
        return todo;
    })
    setTodos(updatedTodos);
}

    return (
        <div>
            <h1>What's the Plan for Today</h1>
            <Form onSubmit={addToDo} />
            <ToDo 
            todos={todos}
            completeTodo={completeTodo}
            removeTodo={removeTodo} 
            updateTodo={updateTodo} />
        </div>
    )
}

export default ToDoList
