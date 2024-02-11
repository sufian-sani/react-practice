import React, {useState} from 'react';
import InputManage from "./InputManage.jsx";
import TodoAddButton from "./TodoAddButton.jsx";
import TodoListManage from "./TodoListManage.jsx";
import TodoRemoveButton from "./TodoRemoveButton.jsx";

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [isEditing, setIsEditing] = useState(null);
    const [editToggole, setEditToggole] = useState(false)

    const inputHandler = (e) => {
        setNewTodo(e.target.value)
    }

    const addTodoItem = () => {
        if (newTodo.trim() !== '' && !isEditing) {
            setTodos([...todos,{ id: Date.now(), text: newTodo}]);
            setNewTodo('');
            // console.log(todos)
        }else if(newTodo && isEditing){
            // console.log(isEditing, newTodo)
            setTodos(todos.map((elem)=>{
                if(elem.id === isEditing){
                    return {...elem,text: newTodo}
                }
                return elem
            }))
            setIsEditing(null)
            setNewTodo('');
            setEditToggole(false)
        }
    }

    const removeItem = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const handleEdit = (id) => {
        let newdata = todos.find((todo)=>{
            return todo.id===id
        })
        setNewTodo(newdata.text)
        setIsEditing(id)
        setEditToggole(true)
    };

    return (
        <div>
            <div className="">
                <InputManage onChange={inputHandler} initialVal={newTodo} />
                <TodoAddButton onClick={addTodoItem} editToggole={editToggole} />
            </div>
            <TodoListManage listItem={todos} removeButtonComponents={removeItem} edithandler={handleEdit} />
        </div>
    );
};

export default TodoApp;