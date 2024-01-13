import React, {useCallback, useEffect, useState} from 'react';

function UseCurrencyInfo(curr) {
    const [result, setResult] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${curr}.json`)
            .then(res=>res.json())
            .then(res=>setResult(res[curr]))
    }, []);

    return result
}

export default UseCurrencyInfo;