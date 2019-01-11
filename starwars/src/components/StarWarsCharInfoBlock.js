import React from 'react'

const StarWarsCharInfoBlock = props => {
  return (
    <div className="info-block">
      <p>{props.blockText}</p>
      <p className="starwars-char-born">{props.charData}</p>
    </div>
  )
}

export default StarWarsCharInfoBlock;
