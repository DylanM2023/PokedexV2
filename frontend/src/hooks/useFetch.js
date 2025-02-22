import { useEffect, useState } from "react";

const useFetch = ((index) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [isError, setIsError] = useState(null);
    
    useEffect(() => {
    
        fetch(`https://pokeapi.co/api/v2/pokemon/${index}`).then((res) => {
            if(!res.ok){
                throw Error("Could not fetch data")
            }
        return res.json()
        })
        .then((data) => {
            setTimeout(() => {
            setData(data);
            setIsPending(false)
            }, 0);
        })
        .catch((err) => {
        setIsPending(false)
        setIsError(err);
        })
    
    }, [index]);

    return {data, isPending, isError}
})

export default useFetch;