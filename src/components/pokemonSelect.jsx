import React from "react"
// import FavPokemon from "./FavPokemon"
import PokemonItem from "./PokemonItem"

const PokemonsSelect = ({pokemons, onPokemonSelected}) => {

    const PokemonDropdown = pokemons.map((pokemon, index) => {
        return <PokemonItem pokemon={pokemon} index={index} key={index}/>
    })

    const handleSelectChange = (evt) => {
        onPokemonSelected(evt.target.value)
    }
    return (
    <>
        <h2>This is the pokemon List</h2>
        <select id="pokemonList" name="pokemonList" onChange={handleSelectChange}>
        {PokemonDropdown}
        </select>
        {/* <FavPokemon/> */}
    </>
)}



export default PokemonsSelect