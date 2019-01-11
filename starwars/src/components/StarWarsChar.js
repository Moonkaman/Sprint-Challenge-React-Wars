import React from 'react'
import StarWarsCharInfoBlock from './StarWarsCharInfoBlock';

import '../../node_modules/@fortawesome/fontawesome-free/css/all.css'

const StarWarsChar = props => {
  return (
    <div className="starwars-char-cont">
      <p className="date-added">Created on {props.char.created}</p>
      <i className="fas fa-user starwars-char-icon"></i>
      <h2 className="starwars-char-name">{props.char.name}</h2>
      <div className="info-cont">
        <StarWarsCharInfoBlock blockText='Gender:' charData={props.char.gender} />
        <StarWarsCharInfoBlock blockText='Born:' charData={props.char.birth_year} />
        <StarWarsCharInfoBlock blockText='Height:' charData={props.char.height} />
        <StarWarsCharInfoBlock blockText='Hair Color:' charData={props.char.hair_color} />
        <StarWarsCharInfoBlock blockText='Eye Color:' charData={props.char.eye_color} />
        <StarWarsCharInfoBlock blockText='Skin Color:' charData={props.char.skin_color} />
        <StarWarsCharInfoBlock blockText='Mass:' charData={props.char.mass} lastBlock={true}/>
      </div>
    </div>
  )
}

export default StarWarsChar;
