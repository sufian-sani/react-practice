import React, {useState} from 'react';
import data from "../data.js";

function According2(props) {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(getId){
        setSelected(getId===selected?null:getId)
    }

    function handleMultiSelection(getId){
        let cpyMultiple = [...multiple]
        const findIndexOfCurrentId = cpyMultiple.indexOf(getId)
        if(findIndexOfCurrentId === -1) cpyMultiple.push(getId)
        else cpyMultiple.splice(findIndexOfCurrentId, 1)
        setMultiple(cpyMultiple)
    }

    return (
        <div>
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button>
            <div>
                {data && data.length>0 ? (
                    data.map((dataItem)=>(
                        <div>
                            <div onClick={
                                enableMultiSelection
                                ? () => handleMultiSelection(dataItem.id)
                                : () => handleSingleSelection(dataItem.id)
                            }>
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {
                                enableMultiSelection
                                ? multiple.indexOf(dataItem.id) !== -1 && (
                                    <div className="content">{dataItem.answer}</div>
                                ) : selected === dataItem.id && (
                                    <div className="content">{dataItem.answer}</div>
                                )
                            }
                            {/*{*/}
                            {/*    selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ? (*/}
                            {/*            <div className="content">{dataItem.answer}</div>*/}
                            {/*        )*/}
                            {/*        :null*/}
                            {/*}*/}
                        </div>
                    ))
                ) : (
                    <div>No data found !</div>
                )}
            </div>
        </div>
    );
}

export default According2;