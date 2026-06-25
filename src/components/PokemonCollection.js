import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokeList, searchTerm}) {
  const pokemonToDisplay = searchTerm ? pokeList.filter(poke => poke.name.includes(searchTerm)) : pokeList

  return (
    <Card.Group itemsPerRow={6}>
      {pokemonToDisplay.map(poke => <PokemonCard pokeInfo={poke} key={poke.id}/>)}
    </Card.Group>
  );
}

export default PokemonCollection;
