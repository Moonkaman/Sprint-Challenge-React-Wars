import React from 'react'
import StarWarsChar from './StarWarsChar';

import './StarWars.css';

const StarWarsCharList = props => {
  return (
    <div className='starwars-char-list'>
      {/* Iterate over all the characters in the prop passed down containing an array and pass each returned element its own char object */}
      {props.starwarsChars.map(char => <StarWarsChar
       char={char}
       key={char.created}
       />)}
    </div>
  )
}

export default StarWarsCharList
