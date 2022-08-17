import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ handleSubmit }) {
  const [newPokemon, setNewPokemon] = useState({
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: ""
  })

  function handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    setNewPokemon({ ...newPokemon, [name]: value })
  }

  const pokemonToAdd = {
    name: newPokemon.name,
    hp: newPokemon.hp,
    sprites: {
      front: newPokemon.frontUrl,
      back: newPokemon.backUrl
    }
  }

  function handleSubmitHandler(event) {
    event.preventDefault()
    handleSubmit(pokemonToAdd)

    fetch("http://localhost:3001/pokemon",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(pokemonToAdd)
      })
      .then(res => res.json())
      .then(data => console.log(data))
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmitHandler}
        onChange={handleChange}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" value={newPokemon.name} placeholder="Name" name="name" />
          <Form.Input fluid label="hp" value={newPokemon.hp} placeholder="hp" name="hp" />
          <Form.Input
            fluid
            value={newPokemon.frontUrl}
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input
            fluid
            value={newPokemon.backUrl}
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
