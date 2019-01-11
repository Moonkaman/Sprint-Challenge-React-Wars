import React from 'react'
import StarWarsChar from './StarWarsChar';

import './StarWars.css';

const StarWarsCharList = props => {
  return (
    <div className='starwars-char-list'>
      {props.starwarsChars.map(char => <StarWarsChar
       charName={char.name}
       key={char.created}
       charBirth={char.birth_year}
       />)}
    </div>
  )
}

export default StarWarsCharList
