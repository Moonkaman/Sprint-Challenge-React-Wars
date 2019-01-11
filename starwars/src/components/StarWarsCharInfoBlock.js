import React from 'react'

const StarWarsCharInfoBlock = props => {
  /* If this will be the last block in the stack we don't want to give it a border-bottom so if this prop is true we will give it
     an extra class 'last-block' so it doesn't have a border-bottom  */
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
