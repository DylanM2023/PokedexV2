import { useEffect, useState } from "react";



const PokeView = () => {
    
    const [pokedata, setPokeData] = useState()

    useEffect(()=>{
        const fetchInfo = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
                setPokeData( await response.json());
                console.log(pokedata)

            } catch (error){
                console.error('Error with api call!', error)
            };
        };
        fetchInfo();
    }, [])
    //Logic
    
    return ( 
    <>
        <h1>This is the poke view page!!</h1>
    </> );
}
 
export default PokeView;