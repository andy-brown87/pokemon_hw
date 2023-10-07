import React, {useState, useEffect} from "react"
import PokemonsSelect from "../components/pokemonSelect"


const PokemonContainer = () => {

    const[pokemons, setPokemons] = useState([])
    const [selectedPokemon, setSelectedPokemon] = useState(null)


    const getPokemons = function(){
        fetch('https://pokeapi.co/api/v2/pokemon/')
        .then (res => res.json)
        .then((pokemonData) => {setPokemons(pokemonData)})
        .catch((error) => console.log(`error loading data; ${error}`))
    }

    const onPokemonSelected = (index) => {
        setSelectedPokemon(pokemons[index])
    }

    useEffect(() => {
        getPokemons()
    }, [])
    
    return (
    <>
        <h2>This is the Pokemon Container</h2>

        {pokemons ? <PokemonsSelect pokemons={pokemons} 
        onPokemonSelected={onPokemonSelected}/> : null}

        {selectedPokemon ? <PokemonDetail pokemon={selectedPokemon}/>: null}

        <PokemonsSelect/>
    </>
    )}

export default PokemonContainer
