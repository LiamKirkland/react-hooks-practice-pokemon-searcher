import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({poke}) {
  const [sprite, setSprite] = useState("front")
  const {id, name, hp, sprites} = poke

  function handleClick() {
    setSprite(sprite === "front" ? "back" : "front")
  }
  console.log(poke)
  return (
    <Card>
      <div onClick={handleClick}>
        <div className="image">
          <img alt="oh no!" src={sprites[sprite]}/>
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
