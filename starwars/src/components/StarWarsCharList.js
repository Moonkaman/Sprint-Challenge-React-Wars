import React from 'react'
import StarWarsChar from './StarWarsChar';

import './StarWars.css';

const StarWarsCharList = props => {
  return (
    <div className='starwars-char-list'>
      {props.starwarsChars.map(char => <StarWarsChar
       char={char}
       key={char.created}
       />)}
    </div>
  )
}

export default StarWarsCharList
