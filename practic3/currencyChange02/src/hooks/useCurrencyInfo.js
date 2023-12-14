import React, {useCallback, useEffect, useState} from 'react';

function UseCurrencyInfo() {
    const [result, setResult] = useState({})
    useEffect(() => {
        fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json')
            .then(res=>res.json())
            .then(res=>setResult(res))
    }, []);

    return result
}

export default UseCurrencyInfo;