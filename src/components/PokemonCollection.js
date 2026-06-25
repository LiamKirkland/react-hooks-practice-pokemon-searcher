import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokeList}) {
  const pokemonToDisplay = pokeList

  return (
    <Card.Group itemsPerRow={6}>
      {pokemonToDisplay.map(poke => <PokemonCard poke={poke} key={poke.id}/>)}
    </Card.Group>
  );
}

export default PokemonCollection;
