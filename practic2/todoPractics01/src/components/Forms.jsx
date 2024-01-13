import React, {useEffect, useState} from 'react';

function Forms() {
    const [inputData, setInputData] = useState("");
    const [togglebtn, setTogglebtn] = useState(true)
    const [isedit, setIsedit] = useState(null)

    const localdata = () => {
        let list = localStorage.getItem("data");
        if(list){
            return JSON.parse(localStorage.getItem("data"))
        }else {
            return []
        }
    }

    const [todo, setTodo] = useState(localdata());

    const handleSubmit = (e) => {
        if(!inputData){
            alert('input field is empty')
        }
        else if(inputData && !togglebtn){
            setTodo(todo.map((elem)=>{
                if(elem.id === isedit){
                    return {...elem,name: inputData}
                }
                return elem
            }))
            setTogglebtn(true);
            setInputData('');
            setIsedit(null);
        } else{
            const inputdata = {id:new Date().getTime().toString(), name:inputData}
            setTodo([...todo, inputdata]);
        }
        setInputData("");
        e.preventDefault();
    }

    const deletedata = (id) => {
        const updateitem = todo.filter((val)=>{
            return val.id !== id
        })
        setTodo(updateitem)
    }

    const editdata = (id) =>{
        let newdata = todo.find((elem)=>{
            return elem.id===id
        })
        setTogglebtn(false)
        setInputData(newdata.name)
        setIsedit(id)
    }

    useEffect(() => {
        localStorage.setItem("data",JSON.stringify(todo))
    }, [todo]);

    console.log(inputData)
    console.log(todo)
    return (
        <div>
            <form
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    value={inputData}
                    onChange={(e)=>setInputData(e.target.value)}
                />
                <input type="submit" value="Add"/>
            </form>
            <div>
                <ul>
                    {todo.map((item) => (
                        <li key={item}>{item.name} &nbsp;
                            <button
                                onClick={()=>deletedata(item.id)}
                            >
                                Del
                            </button>
                            <button
                                onClick={()=>editdata(item.id)}
                            >
                                Edit
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Forms;