import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

const PokeView = () => {

    const [index, setIndex] = useState('1')
    const [name, setName] = useState('')
    const {data, isPending, isError} = useFetch(index)


    function fetchName (search) {
        setIndex(search)

        if (data.name == search){
            setIndex(data.order)
        }
    }

    function nextPokemon (index) {

        const new_index = parseInt(index) + 1
        setIndex(new_index.toString())
    }

    function prevPokemon (index) {
        const new_index = parseInt(index) - 1
        setIndex(new_index.toString())
    }

    return ( 
    <div className="rounded-xl justify-items-center">
        <h1 className="text-8xl text-center bg-zinc-800 text-slate-100 w-screen h-28">Pokédex</h1>
        <div className="bg-green-500 justify-items-center w-2/6 rounded-3xl my-5">
            {isPending && <p>Loading...</p>}
            {data != null && <div>
                                <h1 className="text-4xl text-center">{data.name}</h1>
                                <img className="bg-green-500" src={data.sprites.other['official-artwork'].front_default} alt="Image Unavailable" />
                                <p className="bg-green-300 text-2xl text-center font-bold rounded-xl border-2 border-black">{data.types[0].type.name}</p>
                            </div>
            }
            <input type="text" placeholder="Search For Pokemon" onChange={(e) => {setName(e.target.value)}}/>
            <button onClick={()=>{{fetchName(name)}}}>Search</button>
            <div className="flex gap-24">
                <button className="border-2 p-5 m-5" onClick={()=>{prevPokemon(data.id)}}>Last</button>
                <button className="border-2 p-5 m-5" onClick={()=>{nextPokemon(data.id)}}>Next</button>
            </div>
        </div>
    </div> 
    );
}

export default PokeView;