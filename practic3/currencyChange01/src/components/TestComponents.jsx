import React, {useState} from 'react';
import CurrencyCall from "./CurrencyCall.js";

function selectHandler(currency1,currency2,currencyFirstValue){
    console.log(currency1,currency2,currencyFirstValue);
}
function TestComponents() {
    let [currency1, setCurrency1] = useState("usd")
    let [currency2, setCurrency2] = useState("bdt")

    let currencyValue1 = CurrencyCall(currency1);
    let currencyKey1 = Object.keys(currencyValue1);

    let currencyValue2 = CurrencyCall(currency2);
    let currencyKey2 = Object.keys(currencyValue2);

    let [currencyFirstValue, setCurrencyFirstValue] = useState(0)

    return (
        <div>
            <select value={currency1} onChange={(e)=>setCurrency1(e.target.value)}>
                {currencyKey1.map((option) => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
            <input type="number" value={currencyFirstValue} onChange={(e)=>setCurrencyFirstValue(e.target.value)} />
            <br />
            <select value={currency2} onChange={(e)=>setCurrency2(e.target.value)}>
                {currencyKey2.map((option) => (
                    <option key={option}>{option}</option>
                ))}
            </select>
            <input type="number" disabled/>
            <br />
            <button onClick={()=>selectHandler(currency1,currency2,currencyFirstValue)}>
                convert
            </button>

        </div>
    );
}

export default TestComponents;