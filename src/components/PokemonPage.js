import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokeData, setPokeData] = useState([]);
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then((r) => r.json())
      .then((data) => dataHandler(data));
  }, []);

  function dataHandler(data) {
    setPokeData(data);
  }

  function handleOnChange(event) {
    setSearch(event.target.value)
  }

  const filteredPokeData = pokeData.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(search.toLowerCase())
  });
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search handleOnChange={handleOnChange} />
      <br />
      <PokemonCollection pokeData={filteredPokeData} />
    </Container>
  );
}

export default PokemonPage
