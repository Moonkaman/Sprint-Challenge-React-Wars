import React from 'react'

const StarWarsCharInfoBlock = props => {
  if(props.lastBlock) {
    return (
      <div className="info-block last-block">
        <p>{props.blockText}</p>
        <p className="starwars-char-born">{props.charData}</p>
      </div>
    )
  } else {
    return (
      <div className="info-block">
        <p>{props.blockText}</p>
        <p className="starwars-char-born">{props.charData}</p>
      </div>
    )
  }
}

export default StarWarsCharInfoBlock;
