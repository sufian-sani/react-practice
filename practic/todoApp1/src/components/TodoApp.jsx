import React, {useEffect, useState} from 'react';
import InputManage from "./InputManage.jsx";
import TodoAddButton from "./TodoAddButton.jsx";
import TodoListManage from "./TodoListManage.jsx";
// import TodoRemoveButton from "./TodoRemoveButton.jsx";

const TodoApp = () => {
    // const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [isEditing, setIsEditing] = useState(null);
    const [editToggole, setEditToggole] = useState(false)
    const [isDisable, setIsDisable] = useState(true)

    const localdata = () => {
        let list = localStorage.getItem("todos");
        if(list){
            return JSON.parse(localStorage.getItem("todos"))
        }else {
            return []
        }
    }

    const [todos, setTodos] = useState(localdata());


    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const inputHandler = (e) => {
        setNewTodo(e.target.value)
    }

    const addTodoItem = () => {
        if (newTodo.trim() !== '' && !isEditing) {
            setTodos([...todos,{ id: Date.now(), text: newTodo}]);
            setNewTodo('');
        }else if(newTodo && isEditing){
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

    const disablehandler = (id) => {
        setTodos(todos.map((elem)=>{
            if(elem.id === id){
                try {
                    if(elem.isDisable.length === 0 || elem.isDisable === false){
                        setIsDisable(true)
                        return {...elem,['isDisable']: true}
                    }else {
                        setIsDisable(false)
                        return {...elem,['isDisable']: false}
                    }
                }
                catch(err){
                    console.log(err)
                }
                setIsDisable(true)
                return {...elem,['isDisable']: true}
            }
            return elem
        }))
    }

    return (
        <div>
            <div className="">
                <InputManage onChange={inputHandler} initialVal={newTodo} />
                <TodoAddButton onClick={addTodoItem} editToggole={editToggole} />
            </div>
            <TodoListManage
                listItem={todos}
                removeButtonComponents={removeItem}
                edithandler={handleEdit}
                disablehandler={disablehandler}
            />
        </div>
    );
};

export default TodoApp;