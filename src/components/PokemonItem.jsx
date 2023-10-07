import React from "react";

const PokemonItem = ({pokemon, index}) => {

    return (
        <>
        <option id={index} value={index} name="pokemon-id">
            {pokemon.results.name}
        </option>
        </>
    )
}

export default PokemonItem