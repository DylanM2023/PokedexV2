import { useEffect, useState } from "react";
import { Pokedex } from "pokeapi-js-wrapper";

const PokeView = () => {

    const pokedex = new Pokedex()
    const [pokemon, setPokemon] = useState('');

    useEffect(()=>{
        async function fetchPoke () {
            try{
                const pokemon_data = await pokedex.getPokemonByName("pikachu")
                setPokemon(pokemon_data)
                }
                catch(e){console.error(e)}
        };
        fetchPoke()
    }, [])

    console.log(pokemon)

    return ( 
    <>
        {pokemon != '' && <div><h1>{pokemon.name}</h1>
        <img className="" src={pokemon.sprites.other['official-artwork'].front_default} alt="Image Unavailable" />
        <p>{pokemon.abilities.effect_entries}</p>
        </div>}
    </> 
    );
}

export default PokeView;