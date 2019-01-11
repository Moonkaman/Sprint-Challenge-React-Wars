import React from 'react'
import StarWarsChar from './StarWarsChar';

const StarWarsCharList = props => {
  return (
    <div>
      {props.starwarsChars.map(char => <StarWarsChar charName={char.name} key={char.created} />)}
    </div>
  )
}

export default StarWarsCharList
