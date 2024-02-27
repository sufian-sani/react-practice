import React, {useState} from 'react';
import data from "../data.js";

function According2(props) {
    const [selected, setSelected] = useState(null);

    function handleSingleSelection(getId){
        console.log(getId)
    }

    return (
        <div>
            <div>
                {data && data.length>0 ? (
                    data.map((dataItem)=>(
                        <div>
                            <div onClick={() => handleSingleSelection(dataItem.id)}>
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {
                                selected
                            }
                            {/*<div className="content">{dataItem.answer}</div>*/}
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