import React from 'react'

import '../../node_modules/@fortawesome/fontawesome-free/css/all.css'

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
      <button><i class="fas fa-search"></i></button>
    </form>
  )
}

export default SearchBar;
