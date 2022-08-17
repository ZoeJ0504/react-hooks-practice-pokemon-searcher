import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokeData }) {


  const cardArray = pokeData.map((pokemon) => {
    return (
      <PokemonCard
        key={pokemon.name}
        image={pokemon.sprites}
        name={pokemon.name}
        hp={pokemon.hp}
      />
    );
  });



  return (
    <Card.Group itemsPerRow={6}>
      {cardArray}
    </Card.Group>
  );
}

export default PokemonCollection;