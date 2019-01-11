import React from 'react'

const SearchBar = props => {
  return (
    <form className="nav-bar">
      <input 
      type="text"
      name="searchBarInput" 
      placeholder="Search..."
      value={props.searchBarInput}
      onChange={props.handleInput} 
      />
    </form>
  )
}

export default SearchBar;
