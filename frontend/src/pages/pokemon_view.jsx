import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

const PokeView = () => {

    const [index, setIndex] = useState('1')
    const [name, setName] = useState('')
    const {data, isPending, isError} = useFetch(index)

    console.log(data)

    function fetchName (search) {
        if (search != ''){
            setIndex(search)
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
        <input className="border-2 border-black my-5" type='text' placeholder="Search For Pokemon" onChange={(e) => {setName(e.target.value)}}/>
        <button className="bg-search_icon bg-center bg-cover w-5 h-5" onClick={()=>{{fetchName(name)}}}></button>
            {isPending && <p>Loading...</p>}
            {data != null && <div>
                                {data.types[0].type.name == 'fire' && 
                                    <div className="bg-red-500 rounded-2xl border-2 border-black">
                                        <div className="flex">
                                            <h1 className="flex flex-grow text-4xl m-5">{String(data.name).charAt(0).toUpperCase() + String(data.name).slice(1)}</h1>
                                            <p className="border-2 border-black w-1/6 text-center text-2xl m-5 rounded-xl bg-red-300 ">{data.id}</p>
                                        </div>
                                        <img className="bg-red-500" src={data.sprites.other['official-artwork'].front_default} alt="Image Unavailable" />
                                        <p className="bg-red-300 text-2xl text-center font-bold rounded-xl border-2 border-black">{String(data.types[0].type.name).charAt(0).toUpperCase() + String(data.types[0].type.name).slice(1)}</p>
                                    </div>}
                                {data.types[0].type.name == 'grass' && 
                                    <div className="bg-green-500 rounded-2xl  border-2 border-black">
                                        <div className="flex">
                                            <h1 className="flex flex-grow text-4xl m-5">{String(data.name).charAt(0).toUpperCase() + String(data.name).slice(1)}</h1>
                                            <p className="border-2 border-black w-1/6  text-center text-2xl m-5 rounded-xl bg-green-300">{data.id}</p>
                                        </div>
                                        <img className="bg-green-500" src={data.sprites.other['official-artwork'].front_default} alt="Image Unavailable" />
                                        <p className="bg-green-300 text-2xl text-center font-bold rounded-xl border-2 border-black">{String(data.types[0].type.name).charAt(0).toUpperCase() + String(data.types[0].type.name).slice(1)}</p>
                                    </div>}
                                {data.types[0].type.name == 'water' && 
                                    <div className="bg-blue-500 rounded-2xl  border-2 border-black">
                                        <div className="flex">
                                            <h1 className="flex flex-grow text-4xl m-5">{String(data.name).charAt(0).toUpperCase() + String(data.name).slice(1)}</h1>
                                            <p className="border-2 border-black w-1/6  text-center text-2xl m-5 rounded-xl bg-blue-300 ">{data.id}</p>
                                        </div>                                        
                                        <img className="bg-blue-500" src={data.sprites.other['official-artwork'].front_default} alt="Image Unavailable" />
                                        <p className="bg-blue-300 text-2xl text-center font-bold rounded-xl border-2 border-black">{String(data.types[0].type.name).charAt(0).toUpperCase() + String(data.types[0].type.name).slice(1)}</p>
                                    </div>}
                                {data.types[0].type.name == 'bug' && 
                                    <div className="bg-lime-500 rounded-2xl  border-2 border-black">
                                        <div className="flex">
                                            <h1 className="flex flex-grow text-4xl m-5">{String(data.name).charAt(0).toUpperCase() + String(data.name).slice(1)}</h1>
                                            <p className="border-2 border-black w-1/6  text-center text-2xl m-5 rounded-xl bg-lime-300">{data.id}</p>
                                        </div>                                        
                                        <img className="bg-lime-500" src={data.sprites.other['official-artwork'].front_default} alt="Image Unavailable" />
                                        <p className="bg-lime-300 text-2xl text-center font-bold rounded-xl border-2 border-black">{String(data.types[0].type.name).charAt(0).toUpperCase() + String(data.types[0].type.name).slice(1)}</p>
                                    </div>}
                                {data.types[0].type.name == 'normal' && 
                                    <div className="bg-orange-300 rounded-2xl  border-2 border-black">
                                        <div className="flex">
                                            <h1 className="flex flex-grow text-4xl m-5">{String(data.name).charAt(0).toUpperCase() + String(data.name).slice(1)}</h1>
                                            <p className="border-2 border-black w-1/6  text-center text-2xl m-5 rounded-xl bg-orange-200">{data.id}</p>
                                        </div>                                        
                                        <img className="bg-orange-300" src={data.sprites.other['official-artwork'].front_default} alt="Image Unavailable" />
                                        <p className="bg-orange-200 text-2xl text-center font-bold rounded-xl border-2 border-black">{String(data.types[0].type.name).charAt(0).toUpperCase() + String(data.types[0].type.name).slice(1)}</p>
                                    </div>}
                                {data.types[0].type.name == 'poison' && 
                                    <div className="bg-purple-500 rounded-2xl  border-2 border-black">
                                        <div className="flex">
                                            <h1 className="flex flex-grow text-4xl m-5">{String(data.name).charAt(0).toUpperCase() + String(data.name).slice(1)}</h1>
                                            <p className="border-2 border-black w-1/6  text-center text-2xl m-5 rounded-xl bg-purple-300">{data.id}</p>
                                        </div>                                        
                                        <img className="bg-purple-500" src={data.sprites.other['official-artwork'].front_default} alt="Image Unavailable" />
                                        <p className="bg-purple-300 text-2xl text-center font-bold rounded-xl border-2 border-black">{String(data.types[0].type.name).charAt(0).toUpperCase() + String(data.types[0].type.name).slice(1)}</p>
                                    </div>}
                                {data.types[0].type.name == 'electric' && 
                                    <div className="bg-yellow-300 rounded-2xl  border-2 border-black">
                                        <div className="flex">
                                            <h1 className="flex flex-grow text-4xl m-5">{String(data.name).charAt(0).toUpperCase() + String(data.name).slice(1)}</h1>
                                            <p className="border-2 border-black w-1/6  text-center text-2xl m-5 rounded-xl bg-yellow-200">{data.id}</p>
                                        </div>                                        
                                        <img className="bg-yellow-300" src={data.sprites.other['official-artwork'].front_default} alt="Image Unavailable" />
                                        <p className="bg-yellow-200 text-2xl text-center font-bold rounded-xl border-2 border-black">{String(data.types[0].type.name).charAt(0).toUpperCase() + String(data.types[0].type.name).slice(1)}</p>
                                    </div>}
                                {data.types[0].type.name == 'ice' && 
                                    <div className="bg-blue-300 rounded-2xl  border-2 border-black">
                                        <div className="flex">
                                            <h1 className="flex flex-grow text-4xl m-5">{String(data.name).charAt(0).toUpperCase() + String(data.name).slice(1)}</h1>
                                            <p className="border-2 border-black w-1/6  text-center text-2xl m-5 rounded-xl bg-blue-200">{data.id}</p>
                                        </div> 
                                        <img className="bg-blue-300" src={data.sprites.other['official-artwork'].front_default} alt="Image Unavailable" />
                                        <p className="bg-blue-200 text-2xl text-center font-bold rounded-xl border-2 border-black">{String(data.types[0].type.name).charAt(0).toUpperCase() + String(data.types[0].type.name).slice(1)}</p>
                                    </div>}
                                {data.types[0].type.name == 'ground' && 
                                    <div className="bg-orange-900 rounded-2xl  border-2 border-black">
                                        <div className="flex">
                                            <h1 className="flex flex-grow text-4xl m-5">{String(data.name).charAt(0).toUpperCase() + String(data.name).slice(1)}</h1>
                                            <p className="border-2 border-black w-1/6  text-center text-2xl m-5 rounded-xl bg-orange-700">{data.id}</p>
                                        </div> 
                                        <img className="bg-orange-900" src={data.sprites.other['official-artwork'].front_default} alt="Image Unavailable" />
                                        <p className="bg-orange-700 text-2xl text-center font-bold rounded-xl border-2 border-black">{String(data.types[0].type.name).charAt(0).toUpperCase() + String(data.types[0].type.name).slice(1)}</p>
                                    </div>}
                                {data.types[0].type.name == 'rock' && 
                                    <div className="border-2 border-black bg-stone-700 rounded-2xl ">
                                        <div className="flex">
                                            <h1 className="flex flex-grow text-4xl m-5">{String(data.name).charAt(0).toUpperCase() + String(data.name).slice(1)}</h1>
                                            <p className="border-2 border-black w-1/6  text-center text-2xl m-5 rounded-xl bg-stone-500">{data.id}</p>
                                        </div> 
                                        <img className="bg-stone-700" src={data.sprites.other['official-artwork'].front_default} alt="Image Unavailable" />
                                        <p className="bg-stone-500 text-2xl text-center font-bold rounded-xl border-2 border-black">{String(data.types[0].type.name).charAt(0).toUpperCase() + String(data.types[0].type.name).slice(1)}</p>
                                    </div>}
                                {data.types[0].type.name == 'fairy' && 
                                    <div className="border-2 border-black bg-pink-400 rounded-2xl ">
                                        <div className="flex">
                                            <h1 className="flex flex-grow text-4xl m-5">{String(data.name).charAt(0).toUpperCase() + String(data.name).slice(1)}</h1>
                                            <p className="border-2 border-black text-center w-1/6  text-2xl m-5 rounded-xl bg-pink-300">{data.id}</p>
                                        </div>                                         
                                        <img className="bg-pink-400" src={data.sprites.other['official-artwork'].front_default} alt="Image Unavailable" />
                                        <p className="bg-pink-300 text-2xl text-center font-bold rounded-xl border-2 border-black">{String(data.types[0].type.name).charAt(0).toUpperCase() + String(data.types[0].type.name).slice(1)}</p>
                                    </div>}
                                {data.types[0].type.name == 'fighting' && 
                                    <div className="border-2 border-black bg-orange-300 rounded-2xl ">
                                        <div className="flex">
                                            <h1 className="flex flex-grow text-4xl m-5">{String(data.name).charAt(0).toUpperCase() + String(data.name).slice(1)}</h1>
                                            <p className="border-2 border-black w-1/6  text-center text-2xl m-5 rounded-xl bg-orange-200">{data.id}</p>
                                        </div> 
                                        <img className="bg-orange-300" src={data.sprites.other['official-artwork'].front_default} alt="Image Unavailable" />
                                    <p className="bg-orange-200 text-2xl text-center font-bold rounded-xl border-2 border-black">{String(data.types[0].type.name).charAt(0).toUpperCase() + String(data.types[0].type.name).slice(1)}</p>
                                </div>}
                                {data.types[0].type.name == 'psychic' && 
                                    <div className="border-2 border-black bg-purple-300 rounded-2xl ">
                                        <div className="flex">
                                            <h1 className="flex flex-grow text-4xl m-5">{String(data.name).charAt(0).toUpperCase() + String(data.name).slice(1)}</h1>
                                            <p className="border-2 border-black w-1/6  text-center text-2xl m-5 rounded-xl bg-purple-200">{data.id}</p>
                                        </div> 
                                        <img className="bg-purple-300" src={data.sprites.other['official-artwork'].front_default} alt="Image Unavailable" />
                                        <p className="bg-purple-200 text-2xl text-center font-bold rounded-xl border-2 border-black">{String(data.types[0].type.name).charAt(0).toUpperCase() + String(data.types[0].type.name).slice(1)}</p>
                                </div>}
                                {data.types[0].type.name == 'ghost' && 
                                    <div className="border-2 border-black bg-indigo-500 rounded-2xl ">
                                        <div className="flex">
                                            <h1 className="flex flex-grow text-4xl m-5">{String(data.name).charAt(0).toUpperCase() + String(data.name).slice(1)}</h1>
                                            <p className="border-2 border-black w-1/6 text-center text-2xl m-5 rounded-xl bg-indigo-400">{data.id}</p>
                                        </div> 
                                        <img className="bg-indigo-500" src={data.sprites.other['official-artwork'].front_default} alt="Image Unavailable" />
                                        <p className="bg-indigo-400 text-2xl text-center font-bold rounded-xl border-2 border-black">{String(data.types[0].type.name).charAt(0).toUpperCase() + String(data.types[0].type.name).slice(1)}</p>
                                    </div>}
                                {data.types[0].type.name == 'steel' && 
                                    <div className="border-2 border-black bg-zinc-500 rounded-2xl ">
                                        <div className="flex">
                                            <h1 className="flex flex-grow text-4xl m-5">{String(data.name).charAt(0).toUpperCase() + String(data.name).slice(1)}</h1>
                                            <p className="border-2 border-black w-1/6  text-center text-2xl m-5 rounded-xl bg-zinc-400">{data.id}</p>
                                        </div> 
                                        <img className="bg-zinc-500" src={data.sprites.other['official-artwork'].front_default} alt="Image Unavailable" />
                                        <p className="bg-zinc-400 text-2xl text-center font-bold rounded-xl border-2 border-black">{String(data.types[0].type.name).charAt(0).toUpperCase() + String(data.types[0].type.name).slice(1)}</p>
                                    </div>}
                                {data.types[0].type.name == 'dark' && 
                                    <div className="border-2 border-gray-700 bg-black text-white rounded-2xl ">
                                        <div className="flex">
                                            <h1 className="flex flex-grow text-4xl m-5">{String(data.name).charAt(0).toUpperCase() + String(data.name).slice(1)}</h1>
                                            <p className="border-2 border-black w-1/6  text-center text-2xl m-5 rounded-xl bg-zinc-500">{data.id}</p>
                                        </div> 
                                        <img className="bg-black" src={data.sprites.other['official-artwork'].front_default} alt="Image Unavailable" />
                                        <p className="bg-zinc-900 text-2xl text-center font-bold rounded-xl border-2 border-black">{String(data.types[0].type.name).charAt(0).toUpperCase() + String(data.types[0].type.name).slice(1)}</p>
                                    </div>}
                                {data.types[0].type.name == 'dragon' && 
                                    <div className="border-2 border-black bg-indigo-800 text-slate-100 rounded-2xl ">
                                        <div className="flex">
                                            <h1 className="flex flex-grow text-4xl m-5">{String(data.name).charAt(0).toUpperCase() + String(data.name).slice(1)}</h1>
                                            <p className="border-2 border-black w-1/6  text-center text-2xl m-5 rounded-xl bg-indigo-600">{data.id}</p>
                                        </div> 
                                        <img className="bg-indigo-800" src={data.sprites.other['official-artwork'].front_default} alt="Image Unavailable" />
                                        <p className="bg-indigo-600 text-2xl text-center font-bold rounded-xl border-2 border-black">{String(data.types[0].type.name).charAt(0).toUpperCase() + String(data.types[0].type.name).slice(1)}</p>
                                    </div>}
                            </div>
            }
            <div className="flex gap-24">
                <button className="border-2 w-40 h-20 m-5 border-black rounded-xl text-2xl" onClick={()=>{prevPokemon(data.id)}}>Last</button>
                <button className="border-2 w-40 h-20 m-5 border-black rounded-xl text-2xl" onClick={()=>{nextPokemon(data.id)}}>Next</button>
            </div>
        </div>
    );
}

export default PokeView;