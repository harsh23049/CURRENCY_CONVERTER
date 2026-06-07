import { useState , useEffect } from 'react';

function useCurrencyInfo(currency){
    [data , setData] = useState(null);
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then(res => res.json()) // .then is used to handle the promise returned by fetch. It takes a callback
        //  function that is executed when the promise is resolved. The callback function receives the resolved
        //  value (in this case, the response from the fetch) as its argument.
        .then(data => setData(data))
    }, [currency])
    return data;
}

export default useCurrencyInfo;