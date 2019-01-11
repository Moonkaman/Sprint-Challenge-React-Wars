import React from 'react'

import '../../node_modules/@fortawesome/fontawesome-free/css/all.css'

const StarWarsChar = props => {
  return (
    <div className="starwars-char-cont">
      <i className="fas fa-user starwars-char-icon"></i>
      <h2 className="starwars-char-name">{props.charName}</h2>
      <h3 className="starwars-char-born">Born: {props.charBirth}</h3>
    </div>
  )
}

export default StarWarsChar;
