import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

const PokeView = () => {

    const [index, setIndex] = useState('1')
    const [name, setName] = useState('')
    const {data, isPending, isError} = useFetch(index)

    console.log(data)

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
            {isPending && <p>Loading...</p>}
            {data != null && <div>
                                {data.types[0].type.name == 'fire' && 
                                    <div className="bg-red-500 rounded-2xl my-10">
                                        <h1 className="text-4xl text-center">{String(data.name).charAt(0).toUpperCase() + String(data.name).slice(1)}</h1>
                                        <img className="bg-red-500" src={data.sprites.other['official-artwork'].front_default} alt="Image Unavailable" />
                                        <p className="bg-red-300 text-2xl text-center font-bold rounded-xl border-2 border-black">{String(data.types[0].type.name).charAt(0).toUpperCase() + String(data.types[0].type.name).slice(1)}</p>
                                    </div>}
                                {data.types[0].type.name == 'grass' && 
                                    <div className="bg-green-500 rounded-2xl my-10">
                                        <h1 className="text-4xl text-center">{String(data.name).charAt(0).toUpperCase() + String(data.name).slice(1)}</h1>
                                        <img className="bg-green-500" src={data.sprites.other['official-artwork'].front_default} alt="Image Unavailable" />
                                        <p className="bg-green-300 text-2xl text-center font-bold rounded-xl border-2 border-black">{String(data.types[0].type.name).charAt(0).toUpperCase() + String(data.types[0].type.name).slice(1)}</p>
                                    </div>}
                                {data.types[0].type.name == 'water' && 
                                    <div className="bg-blue-500 rounded-2xl my-10">
                                        <h1 className="text-4xl text-center">{String(data.name).charAt(0).toUpperCase() + String(data.name).slice(1)}</h1>
                                        <img className="bg-blue-500" src={data.sprites.other['official-artwork'].front_default} alt="Image Unavailable" />
                                        <p className="bg-blue-300 text-2xl text-center font-bold rounded-xl border-2 border-black">{String(data.types[0].type.name).charAt(0).toUpperCase() + String(data.types[0].type.name).slice(1)}</p>
                                    </div>}
                                {data.types[0].type.name == 'bug' && 
                                    <div className="bg-lime-500 rounded-2xl my-10">
                                        <h1 className="text-4xl text-center">{String(data.name).charAt(0).toUpperCase() + String(data.name).slice(1)}</h1>
                                        <img className="bg-lime-500" src={data.sprites.other['official-artwork'].front_default} alt="Image Unavailable" />
                                        <p className="bg-lime-300 text-2xl text-center font-bold rounded-xl border-2 border-black">{String(data.types[0].type.name).charAt(0).toUpperCase() + String(data.types[0].type.name).slice(1)}</p>
                                    </div>}
                                {data.types[0].type.name == 'normal' && 
                                    <div className="bg-orange-300 rounded-2xl my-10">
                                        <h1 className="text-4xl text-center">{String(data.name).charAt(0).toUpperCase() + String(data.name).slice(1)}</h1>
                                        <img className="bg-orange-300" src={data.sprites.other['official-artwork'].front_default} alt="Image Unavailable" />
                                        <p className="bg-orange-200 text-2xl text-center font-bold rounded-xl border-2 border-black">{String(data.types[0].type.name).charAt(0).toUpperCase() + String(data.types[0].type.name).slice(1)}</p>
                                    </div>}
                                {data.types[0].type.name == 'poison' && 
                                    <div className="bg-purple-500 rounded-2xl my-10">
                                        <h1 className="text-4xl text-center">{String(data.name).charAt(0).toUpperCase() + String(data.name).slice(1)}</h1>
                                        <img className="bg-purple-500" src={data.sprites.other['official-artwork'].front_default} alt="Image Unavailable" />
                                        <p className="bg-purple-300 text-2xl text-center font-bold rounded-xl border-2 border-black">{String(data.types[0].type.name).charAt(0).toUpperCase() + String(data.types[0].type.name).slice(1)}</p>
                                    </div>}
                                {data.types[0].type.name == 'electric' && 
                                    <div className="bg-yellow-300 rounded-2xl my-10">
                                        <h1 className="text-4xl text-center">{String(data.name).charAt(0).toUpperCase() + String(data.name).slice(1)}</h1>
                                        <img className="bg-yellow-300" src={data.sprites.other['official-artwork'].front_default} alt="Image Unavailable" />
                                        <p className="bg-yellow-200 text-2xl text-center font-bold rounded-xl border-2 border-black">{String(data.types[0].type.name).charAt(0).toUpperCase() + String(data.types[0].type.name).slice(1)}</p>
                                    </div>}
                                {data.types[0].type.name == 'ice' && 
                                    <div className="bg-blue-300 rounded-2xl my-10">
                                        <h1 className="text-4xl text-center">{String(data.name).charAt(0).toUpperCase() + String(data.name).slice(1)}</h1>
                                        <img className="bg-green-500" src={data.sprites.other['official-artwork'].front_default} alt="Image Unavailable" />
                                        <p className="bg-green-300 text-2xl text-center font-bold rounded-xl border-2 border-black">{String(data.types[0].type.name).charAt(0).toUpperCase() + String(data.types[0].type.name).slice(1)}</p>
                                    </div>}
                                {data.types[0].type.name == 'ground' && 
                                    <div className="bg-orange-900 rounded-2xl my-10">
                                        <h1 className="text-4xl text-center">{String(data.name).charAt(0).toUpperCase() + String(data.name).slice(1)}</h1>
                                        <img className="bg-orange-900" src={data.sprites.other['official-artwork'].front_default} alt="Image Unavailable" />
                                        <p className="bg-orange-700 text-2xl text-center font-bold rounded-xl border-2 border-black">{String(data.types[0].type.name).charAt(0).toUpperCase() + String(data.types[0].type.name).slice(1)}</p>
                                    </div>}
                                {data.types[0].type.name == 'rock' && 
                                    <div className="bg-stone-700 rounded-2xl my-10">
                                        <h1 className="text-4xl text-white text-center">{String(data.name).charAt(0).toUpperCase() + String(data.name).slice(1)}</h1>
                                        <img className="bg-stone-700" src={data.sprites.other['official-artwork'].front_default} alt="Image Unavailable" />
                                        <p className="bg-stone-500 text-2xl text-center font-bold rounded-xl border-2 border-black">{String(data.types[0].type.name).charAt(0).toUpperCase() + String(data.types[0].type.name).slice(1)}</p>
                                    </div>}
                                {data.types[0].type.name == 'fairy' && 
                                    <div className="bg-pink-400 rounded-2xl my-10">
                                        <h1 className="text-4xl text-center">{String(data.name).charAt(0).toUpperCase() + String(data.name).slice(1)}</h1>
                                        <img className="bg-pink-400" src={data.sprites.other['official-artwork'].front_default} alt="Image Unavailable" />
                                        <p className="bg-pink-300 text-2xl text-center font-bold rounded-xl border-2 border-black">{String(data.types[0].type.name).charAt(0).toUpperCase() + String(data.types[0].type.name).slice(1)}</p>
                                    </div>}
                                {data.types[0].type.name == 'fighting' && 
                                    <div className="bg-orange-300 rounded-2xl my-10">
                                        <h1 className="text-4xl text-center">{String(data.name).charAt(0).toUpperCase() + String(data.name).slice(1)}</h1>
                                        <img className="bg-orange-300" src={data.sprites.other['official-artwork'].front_default} alt="Image Unavailable" />
                                    <p className="bg-orange-200 text-2xl text-center font-bold rounded-xl border-2 border-black">{String(data.types[0].type.name).charAt(0).toUpperCase() + String(data.types[0].type.name).slice(1)}</p>
                                </div>}
                                {data.types[0].type.name == 'psychic' && 
                                    <div className="bg-purple-300 rounded-2xl my-10">
                                        <h1 className="text-4xl text-center">{String(data.name).charAt(0).toUpperCase() + String(data.name).slice(1)}</h1>
                                        <img className="bg-purple-300" src={data.sprites.other['official-artwork'].front_default} alt="Image Unavailable" />
                                    <p className="bg-purple-200 text-2xl text-center font-bold rounded-xl border-2 border-black">{String(data.types[0].type.name).charAt(0).toUpperCase() + String(data.types[0].type.name).slice(1)}</p>
                                </div>}
                                {data.types[0].type.name == 'ghost' && 
                                    <div className="bg-indigo-500 rounded-2xl my-10">
                                        <h1 className="text-4xl text-center">{String(data.name).charAt(0).toUpperCase() + String(data.name).slice(1)}</h1>
                                        <img className="bg-indigo-500" src={data.sprites.other['official-artwork'].front_default} alt="Image Unavailable" />
                                        <p className="bg-indigo-400 text-2xl text-center font-bold rounded-xl border-2 border-black">{String(data.types[0].type.name).charAt(0).toUpperCase() + String(data.types[0].type.name).slice(1)}</p>
                                    </div>}
                                {data.types[0].type.name == 'steel' && 
                                    <div className="bg-zinc-500 rounded-2xl my-10">
                                        <h1 className="text-4xl text-center">{String(data.name).charAt(0).toUpperCase() + String(data.name).slice(1)}</h1>
                                        <img className="bg-zinc-500" src={data.sprites.other['official-artwork'].front_default} alt="Image Unavailable" />
                                        <p className="bg-zinc-400 text-2xl text-center font-bold rounded-xl border-2 border-black">{String(data.types[0].type.name).charAt(0).toUpperCase() + String(data.types[0].type.name).slice(1)}</p>
                                    </div>}
                                {data.types[0].type.name == 'dark' && 
                                    <div className="bg-black text-white rounded-2xl my-10">
                                        <h1 className="text-4xl text-center">{String(data.name).charAt(0).toUpperCase() + String(data.name).slice(1)}</h1>
                                        <img className="bg-black" src={data.sprites.other['official-artwork'].front_default} alt="Image Unavailable" />
                                        <p className="bg-zinc-900 text-2xl text-center font-bold rounded-xl border-2 border-black">{String(data.types[0].type.name).charAt(0).toUpperCase() + String(data.types[0].type.name).slice(1)}</p>
                                    </div>}
                                {data.types[0].type.name == 'dragon' && 
                                    <div className="bg-indigo-800 text-slate-100 rounded-2xl my-10">
                                        <h1 className="text-4xl text-center">{String(data.name).charAt(0).toUpperCase() + String(data.name).slice(1)}</h1>
                                        <img className="bg-indigo-800" src={data.sprites.other['official-artwork'].front_default} alt="Image Unavailable" />
                                        <p className="bg-indigo-600 text-2xl text-center font-bold rounded-xl border-2 border-black">{String(data.types[0].type.name).charAt(0).toUpperCase() + String(data.types[0].type.name).slice(1)}</p>
                                    </div>}
                            </div>
            }
            <input type="text" placeholder="Search For Pokemon" onChange={(e) => {setName(e.target.value)}}/>
            <button onClick={()=>{{fetchName(name)}}}>Search</button>
            <div className="flex gap-24">
                <button className="border-2 p-5 m-5" onClick={()=>{prevPokemon(data.id)}}>Last</button>
                <button className="border-2 p-5 m-5" onClick={()=>{nextPokemon(data.id)}}>Next</button>
            </div>
        </div>
    );
}

export default PokeView;