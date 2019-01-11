import React from 'react'

const StarWarsChar = props => {
  return (
    <div className="starwars-char-cont">
      <h2 className="starwars-char-name">{props.charName}</h2>
      <h3 className="starwars-char-born">Born: {props.charBirth}</h3>
    </div>
  )
}

export default StarWarsChar;
