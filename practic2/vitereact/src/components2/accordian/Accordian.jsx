import React, {useState} from 'react';
import data from '../data.js'
function Accordian(props) {
    const [selected, setSelected] = useState(null);
    const [multiSelect, setMultiSelect] = useState(false)
    const [multipleList, setMultipleList] = useState([])
    function hendelExpend(id) {
        setSelected(id)
    }

    function multiSelectHendel(id) {
        // setMultiSelect(!multiSelect)
        // console.log(multipleList)
        // console.log('multiSelectHendel',id)
        // let cpyMutiple = [...multiple];
        let cpyMutiple = [...multipleList];
        const findIndexOfCurrentId = cpyMutiple.indexOf(id)
        console.log(findIndexOfCurrentId)
        if(findIndexOfCurrentId === -1) cpyMutiple.push(id)
        else cpyMutiple.splice(findIndexOfCurrentId,1)
        setMultipleList(cpyMutiple)
    }

    return (
        <div>
            <button onClick={()=>setMultiSelect(!multiSelect)}>Enable Multi Selection</button>
            <div className="accordian">
                {
                    data && data.length > 0 ? (
                        data.map((dataItem) => (
                            <div className="item">
                                <div>
                                    <h3 style={{display: 'inline'}}>{dataItem.question}</h3>
                                    <span
                                        style={{cursor: 'pointer'}}
                                        onClick={
                                            multiSelect ?
                                                () => multiSelectHendel(dataItem.id)
                                                : () => hendelExpend(dataItem.id)
                                        }
                                    >+</span>
                                    {
                                        // <div className="content">{dataItem.answer}</div>
                                        // selected ? `<div className="content">{dataItem.answer}</div>` : <div></div>
                                        // selected == dataItem.id && <div className="content">{dataItem.answer}</div>
                                        multiSelect ?
                                            multipleList.indexOf(dataItem.id) !== -1 &&
                                            <div className="content">{dataItem.answer}</div>
                                            : selected == dataItem.id && <div className="content">{dataItem.answer}</div>
                                    }
                                </div>
                            </div>
                        ))
                    ) : (
                        <h3>No data found !</h3>
                    )
                }
            </div>
        </div>
    );
}

export default Accordian;