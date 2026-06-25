import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({onSetPokeList}) {
  const blankState = {
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: ""
  }
  const [formData, setFormData] = useState(blankState)

  function handleSubmit(e) {
    const submitedData = Object.fromEntries(new FormData(e.currentTarget))
    const newPokemon = {
      name: submitedData.name,
      hp: +submitedData.hp,
      sprites: {
        front: submitedData.frontUrl,
        back: submitedData.backUrl
      }
    }
    

    fetch("http://localhost:3001/pokemon", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newPokemon)
    })
    .then(res => res.json())
    .then(dbPoke => {
      onSetPokeList(prevList => [...prevList, dbPoke])
    })
  }
  function handleChange(e, {name, value}) {
    if(name === "hp" && (isNaN(+value) || value == ' ')) {
      value = formData.hp
    }

    setFormData(prevData => {
      return {
        ...prevData,
        [name]: value
      }
    })
  }
  
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={formData.name} onChange={handleChange} required/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={formData.hp} onChange={handleChange} required/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={formData.frontUrl} 
            onChange={handleChange}
            required
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={formData.backUrl} 
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
