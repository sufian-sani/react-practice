import React, {useState} from 'react';
import CurrencyCall from "./CurrencyCall.js";


function selectHandler(currency1,currency2,currencyFirstValue, currencyValue1, currencyValue2,setCurrencySecondValue){
    // console.log(currency1,currency2,currencyFirstValue,currencyValue1, currencyValue2);
    let requiredVal = 0
    for (const [key, value] of Object.entries(currencyValue1)) {
        // console.log(key, value);
        if (key === currency2){
            // requiredVal = value;
            // requiredVal = requiredVal * currency2
            // console.log(requiredVal * currency2)
            currencyFirstValue=parseInt(currencyFirstValue)
            requiredVal=currencyFirstValue*value
        }
    }

    setCurrencySecondValue(requiredVal)
    // return requiredVal
    // console.log('currencyValue1',currencyValue1)
    // for (const [key, value] of currencyValue1.entries()) {
    //     if (key === currency2){
    //         console.log(key,value)
    //     }
    // }
}

function TestComponents() {
    let [currency1, setCurrency1] = useState("usd")
    let [currency2, setCurrency2] = useState("bdt")

    let currencyValue1 = CurrencyCall(currency1);
    let currencyKey1 = Object.keys(currencyValue1);

    let currencyValue2 = CurrencyCall(currency2);
    let currencyKey2 = Object.keys(currencyValue2);

    let [currencyFirstValue, setCurrencyFirstValue] = useState(0)
    let [currencySecondValue, setCurrencySecondValue] = useState(0)

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
            <input type="number" disabled value={currencySecondValue}/>
            <br />
            <button onClick={()=>selectHandler(currency1,currency2,currencyFirstValue, currencyValue1, currencyValue2,setCurrencySecondValue)}>
                convert
            </button>

        </div>
    );
}

export default TestComponents;