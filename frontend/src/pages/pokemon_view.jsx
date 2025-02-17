import { useEffect, useState } from "react";
import { Pokedex } from "pokeapi-js-wrapper";

const PokeView = () => {

    const [name, setName] = useState('')
    const pokedex = new Pokedex()
    const [pokemon, setPokemon] = useState('');

    async function fetchPoke (name) {
            try{
                const pokemon_data = await pokedex.getPokemonByName(name)
                setPokemon(pokemon_data)
                }
                catch(e){console.error(e)}
        };

    console.log(pokemon)

    return ( 
    <>
        <input type="text" placeholder="Search For Pokemon" onChange={(e) => {setName(e.target.value)}}/>
        <button onClick={()=>{fetchPoke(name)}}>Search</button>
        {pokemon != '' && <div><h1>{pokemon.name}</h1>
        <img className="" src={pokemon.sprites.other['official-artwork'].front_default} alt="Image Unavailable" />
        <p>{pokemon.abilities.effect_entries}</p>
        </div>}
    </> 
    );
}

export default PokeView;