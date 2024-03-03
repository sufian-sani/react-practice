import React, {useState} from 'react';
import data from '../data.js'
function Accordian(props) {
    const [selected, setSelected] = useState(null);
    function hendelExpend(id) {

    }

    return (
        <div>
            <div className="accordian">
                {
                    data && data.length > 0 ? (
                        data.map((dataItem)=>(
                            <div className="item">
                                <div>
                                    <h3 style={{display: 'inline'}}>{dataItem.question}</h3>
                                    <span
                                        style={{cursor: 'pointer'}}
                                        onClick={()=>hendelExpend(dataItem.id)}
                                    >+</span>
                                    {
                                        <div className="content">{dataItem.answer}</div>
                                    }
                                </div>
                            </div>
                        ))
                    ):(
                        <h3>No data found !</h3>
                    )
                }
            </div>
        </div>
    );
}

export default Accordian;