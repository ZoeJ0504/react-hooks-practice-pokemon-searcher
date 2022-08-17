import React from "react";
import { Card } from "semantic-ui-react";
function PokemonCard({ name, hp, image }) {


  function handleOnClick(event) {
    event.target.src !== image.back ? event.target.src = image.back : event.target.src = image.front
  }

  return (
    <Card>

      <div>
        <div className="image">
          <img onClick={handleOnClick} src={image.front} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>

    </Card>
  );
}

export default PokemonCard;
