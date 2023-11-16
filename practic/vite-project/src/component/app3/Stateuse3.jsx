import React, { useState } from 'react';

const Stateuse3 = () => {
    const [list,setList]=useState([]);
    const [item,setItem]=useState("");

    const AddToList=()=>{
        list.push(item)
        setList([...list]);
    }
    const RemoveItem = (index) => {
        list.splice(index,1)
        setList([...list]);
    }

    return (
        <div>
            <table>
                <tbody>
                    {
                        list.length!==0?(
                            list.map((element,index)=>{
                                return(
                                    <tr>
                                        <td>{element}</td>
                                        <td><button onClick={()=>{
                                            RemoveItem(index)
                                        }}>Remove</button></td>
                                    </tr>
                                )
                            })
                        ):(<tr></tr>)
                    }
                </tbody>
            </table>
            <input onChange={(e)=>setItem(e.target.value)} placeholder="Item" />
            <button onClick={AddToList}>Add</button>
        </div>
    );
};

export default Stateuse3;