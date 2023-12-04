import CurrencyCall from "./CurrencyCall.js";

import React from 'react';

function TestComponents(props) {
    let currencyVal = CurrencyCall('usd')
    console.log(typeof currencyVal)
    return (
        <div>

        </div>
    );
}

export default TestComponents;