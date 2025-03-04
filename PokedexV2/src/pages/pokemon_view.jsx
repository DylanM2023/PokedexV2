import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

const PokeView = () => {

    const [index, setIndex] = useState('1')
    const [name, setName] = useState('')
    const {data, isPending, isError} = useFetch(index)

    function fetchName (search) {
        if (search != ''){
            setIndex(search);
            document.getElementById("pokemon_search_box").value = ""
        }
    }

    // fetchName sets the index to the name the user searches for. It ignores blank values

    function randomPokemon (max) {
        return Math.floor(Math.random() * max)
    };

    function nextPokemon (index) {
        const new_index = parseInt(index) + 1
        setIndex(new_index.toString())
    }

    function prevPokemon (index) {
        const new_index = parseInt(index) - 1
        setIndex(new_index.toString())
    }

    function setBodyStyle(type) {
        let styleCard = "flex-col h-auto rounded-t-2xl border-2 border-black"
        switch (type) {
            case "fire":
                return styleCard + ' bg-red-500';
            case "grass":
                return styleCard + ' bg-green-500';
            case "water":
                return styleCard + ' bg-blue-600'
            case "bug":
                return styleCard + ' bg-lime-500'
            case "poison":
                return styleCard + ' bg-purple-500'
            case "electric":
                return styleCard + ' bg-yellow-400'
            case "ground":
                return styleCard + ' bg-orange-900'
            case "fairy":
                return styleCard + ' bg-pink-400'
            case "psychic":
                return styleCard + ' bg-purple-900'
            case "rock":
                return styleCard + ' bg-stone-700'
            case "ice":
                return styleCard + ' bg-cyan-400'
            case "dragon":
                return styleCard + ' bg-indigo-900'
            case "steel":
                return styleCard + ' bg-slate-600'
            case "dark":
                return styleCard + ' bg-black text-white'
            case "ghost":
                return styleCard + ' bg-violet-700'
            default:
                return styleCard + ' bg-orange-300';
        }
    }

    function setTypeStyle(type) {
        let styleCard = "text-2xl text-center font-bold border-t-2 border-black font-body"
        switch(type){
            case "fire":
                return styleCard + ' bg-red-400';
            case "grass":
                return styleCard + ' bg-green-300';
            case "water":
                return styleCard + ' bg-blue-400'
            case "bug":
                return styleCard + ' bg-lime-300'
            case "poison":
                return styleCard + ' bg-purple-400'
            case "electric":
                return styleCard + ' bg-yellow-300'
            case "ground":
                return styleCard + ' bg-ground-type'
            case "fairy":
                return styleCard + ' bg-pink-300'
            case "psychic":
                return styleCard + ' bg-purple-600'
            case "rock":
                return styleCard + ' bg-stone-500'
            case "ice":
                return styleCard + ' bg-cyan-300'
            case "dragon":
                return styleCard + ' bg-dragon-type'
            case "steel":
                return styleCard + ' bg-slate-500'
            case "dark":
                return styleCard + ' bg-black text-white border-white'
            case "ghost":
                return styleCard + ' bg-violet-500'
            case "flying":
                return styleCard + ' bg-teal-300'
            default:
                return styleCard + ' bg-orange-100';
        }
    }

    // next/prevPokemon convert the current index into an integer and change the value by +/- 1 this changes the view to the next or previous pokemon 

    return ( 
    <div className="rounded-xl justify-items-center overflow-hidden">
        <div className="w-screen h-24 bg-neutral-900 text-center ">
            {isPending && <h1 className="text-6xl text-slate-100 py-3 font-body">Loading...</h1>}
            {isPending == false && <h1 className="text-6xl text-slate-100 py-4 font-body">Pokédex</h1>}
        </div>
        <div className="my-3">
            <input id="pokemon_search_box" className="border-2 border-black" type='text' placeholder="Search For Pokemon" onChange={(e) => {setName(e.target.value)}}/>
            <button className="bg-search_icon bg-center bg-cover w-5 h-5" onClick={()=>{{fetchName(name)}}}></button>
        </div>
            {data && <div>
                        {isError == null && 
                                    <div>{data.types  && 
                                        <div className={setBodyStyle(data.types[0].type.name)} >
                                            <div className="flex">
                                                <h1 className="flex flex-grow text-4xl m-5 font-body">{String(data.name).charAt(0).toUpperCase() + String(data.name).slice(1)}</h1>
                                                <p className="border-2 border-black w-1/6 text-center text-2xl m-5 max-h-10 font-bold rounded-xl bg-white bg-opacity-25">{data.id}</p>
                                            </div>
                                            <img src={data.sprites.other['official-artwork'].front_default} alt="Image Unavailable"/>
                                        {(data.types.map((array, id)=>(
                                            <div className={setTypeStyle(array.type.name)} key={id}>
                                            {String(array.type.name).charAt(0).toUpperCase() + String(array.type.name).slice(1)}
                                            </div>)))}
                                        </div>}
                                    </div>}
                            {isError && 
                                <div>
                                    <div className="flex-col h-auto rounded-t-2xl border-2 border-black bg-black text-slate-50">
                                        <div className="flex">
                                            <h1 className="flex flex-grow text-4xl m-5 font-body">Error</h1>
                                            <p className="border-2 border-black w-1/6 text-center text-2xl m-5 font-bold rounded-xl bg-white bg-opacity-25">404</p>
                                        </div>
                                    </div>
                                    <img className="bg-black" src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/137.png' alt="" />
                                    <p className="text-2xl text-center font-bold border-t-2 border-white font-body bg-black text-white">Pokémon was not found</p>
                                </div>}
                            </div>
            }
            <div className="flex flex-col items-center w-screen border-2">
                <div className="flex overflow-hidden">
                    <button className="mx-0.5 border-2 w-32 h-20 my-5 border-black rounded-xl text-2xl" onClick={()=>{prevPokemon(data.id)}}>Last</button>
                    <button className="mx-0.5 border-2 w-32 h-20 my-5 border-black rounded-xl text-2xl" onClick={()=>{fetchName(randomPokemon(1025))}}>Random</button>
                    <button className="mx-0.5 border-2 w-32 h-20 my-5 border-black rounded-xl text-2xl " onClick={()=>{nextPokemon(data.id)}}>Next</button>
                </div>
            </div>
        </div>
    );
}

export default PokeView;