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

    const disablehandler = (id) => {
        // if(!isDisable){
        //     console.log(isDisable,'test 1')
        // }else {
        //     console.log(isDisable, 'test 2')
        // }
        // setTodos(todos.find((todo) => {
        //     todo.id === id
        // }))
        // let isDisableData = todos.find((todo)=>{
        //     if(todo.id === id){
        //         return {...todo,['isDisable']:isDisable}
        //     }
        // })
        // setTodos(...todos, isDisableData)
        // console.log(isDisableData)
        // console.log(isDisable)
        // return isDisableData
        setTodos(todos.map((elem)=>{
            if(elem.id === id){
                try {
                    if(!elem.isDisable){
                        console.log('test try fast if')
                        setIsDisable(isDisable)
                        return {...elem,['isDisable']: isDisable}
                    }else {
                        setIsDisable(!isDisable)
                        return {...elem,['isDisable']: isDisable}
                    }
                }
                catch(err){
                    console.log(err)
                }
                // console.log('test',isDisable)

                setIsDisable(!isDisable)
                return {...elem,['isDisable']: isDisable}
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
                // idDisableVar={isDisable}
            />
        </div>
    );
};

export default TodoApp;