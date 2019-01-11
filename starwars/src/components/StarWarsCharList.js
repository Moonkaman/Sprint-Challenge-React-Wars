import React from 'react'
import StarWarsChar from './StarWarsChar';

import './StarWars.css';

const StarWarsCharList = props => {
  // If nothing matches the search then display an h1 that says no results
  if(props.starwarsChars.length === 0) {
    return (
      <div className='starwars-char-list'>
        <h1 className="no-results">No Results</h1>
      </div>
    )
  } else {
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
}

export default StarWarsCharList
