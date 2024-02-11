import React, {useState} from 'react';
import InputManage from "./InputManage.jsx";
import TodoAddButton from "./TodoAddButton.jsx";
import TodoListManage from "./TodoListManage.jsx";
import TodoRemoveButton from "./TodoRemoveButton.jsx";

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    const inputHandler = (e) => {
        setNewTodo(e.target.value)
    }

    const addTodoItem = () => {
        if (newTodo.trim() !== '') {
            setTodos([...todos,{ id: Date.now(), text: newTodo}]);
            setNewTodo('');
            // console.log(todos)
        }
    }

    const removeItem = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const handleEdit = (id) => {
        let editTodo = ''
        // console.log(id)
        todos.map((todo)=>{
            if (todo.id === id){
                editTodo = todo.text
            }
        })
        setNewTodo(editTodo)
        // setTodos()
        // console.log(id, text)
        // setTodos(
        //     todos.map((todo) =>
        //         todo.id === id ? { ...todo, text: text } : todo
        //     )
        // )
        // let updatedTodos = todos.map(todo => {
        //
        // })
        // console.log('test')
        // // debugger;
        // console.log('test1')
        // setTodos(
        //     todos.map((todo) =>
        //         todo.id === id ? { ...todo, text: newText } : todo
        //     )
        // );
    };

    return (
        <div>
            <div className="">
                <InputManage onChange={inputHandler} initialVal={newTodo} />
                <TodoAddButton onClick={addTodoItem} />
            </div>
            <TodoListManage listItem={todos} removeButtonComponents={removeItem} edithandler={handleEdit} />
        </div>
    );
};

export default TodoApp;