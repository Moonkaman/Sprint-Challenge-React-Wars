import React, { Component } from 'react';
import StarWarsCharList from './components/StarWarsCharList';
import SearchBar from './components/SearchBar';

import './App.css';

//Stringified data from api to lighten load on the api
let dummyData = [{"name":"Luke Skywalker","height":"172","mass":"77","hair_color":"blond","skin_color":"fair","eye_color":"blue","birth_year":"19BBY","gender":"male","homeworld":"https://swapi.co/api/planets/1/","films":["https://swapi.co/api/films/2/","https://swapi.co/api/films/6/","https://swapi.co/api/films/3/","https://swapi.co/api/films/1/","https://swapi.co/api/films/7/"],"species":["https://swapi.co/api/species/1/"],"vehicles":["https://swapi.co/api/vehicles/14/","https://swapi.co/api/vehicles/30/"],"starships":["https://swapi.co/api/starships/12/","https://swapi.co/api/starships/22/"],"created":"2014-12-09T13:50:51.644000Z","edited":"2014-12-20T21:17:56.891000Z","url":"https://swapi.co/api/people/1/"},{"name":"C-3PO","height":"167","mass":"75","hair_color":"n/a","skin_color":"gold","eye_color":"yellow","birth_year":"112BBY","gender":"n/a","homeworld":"https://swapi.co/api/planets/1/","films":["https://swapi.co/api/films/2/","https://swapi.co/api/films/5/","https://swapi.co/api/films/4/","https://swapi.co/api/films/6/","https://swapi.co/api/films/3/","https://swapi.co/api/films/1/"],"species":["https://swapi.co/api/species/2/"],"vehicles":[],"starships":[],"created":"2014-12-10T15:10:51.357000Z","edited":"2014-12-20T21:17:50.309000Z","url":"https://swapi.co/api/people/2/"},{"name":"R2-D2","height":"96","mass":"32","hair_color":"n/a","skin_color":"white, blue","eye_color":"red","birth_year":"33BBY","gender":"n/a","homeworld":"https://swapi.co/api/planets/8/","films":["https://swapi.co/api/films/2/","https://swapi.co/api/films/5/","https://swapi.co/api/films/4/","https://swapi.co/api/films/6/","https://swapi.co/api/films/3/","https://swapi.co/api/films/1/","https://swapi.co/api/films/7/"],"species":["https://swapi.co/api/species/2/"],"vehicles":[],"starships":[],"created":"2014-12-10T15:11:50.376000Z","edited":"2014-12-20T21:17:50.311000Z","url":"https://swapi.co/api/people/3/"},{"name":"Darth Vader","height":"202","mass":"136","hair_color":"none","skin_color":"white","eye_color":"yellow","birth_year":"41.9BBY","gender":"male","homeworld":"https://swapi.co/api/planets/1/","films":["https://swapi.co/api/films/2/","https://swapi.co/api/films/6/","https://swapi.co/api/films/3/","https://swapi.co/api/films/1/"],"species":["https://swapi.co/api/species/1/"],"vehicles":[],"starships":["https://swapi.co/api/starships/13/"],"created":"2014-12-10T15:18:20.704000Z","edited":"2014-12-20T21:17:50.313000Z","url":"https://swapi.co/api/people/4/"},{"name":"Leia Organa","height":"150","mass":"49","hair_color":"brown","skin_color":"light","eye_color":"brown","birth_year":"19BBY","gender":"female","homeworld":"https://swapi.co/api/planets/2/","films":["https://swapi.co/api/films/2/","https://swapi.co/api/films/6/","https://swapi.co/api/films/3/","https://swapi.co/api/films/1/","https://swapi.co/api/films/7/"],"species":["https://swapi.co/api/species/1/"],"vehicles":["https://swapi.co/api/vehicles/30/"],"starships":[],"created":"2014-12-10T15:20:09.791000Z","edited":"2014-12-20T21:17:50.315000Z","url":"https://swapi.co/api/people/5/"},{"name":"Owen Lars","height":"178","mass":"120","hair_color":"brown, grey","skin_color":"light","eye_color":"blue","birth_year":"52BBY","gender":"male","homeworld":"https://swapi.co/api/planets/1/","films":["https://swapi.co/api/films/5/","https://swapi.co/api/films/6/","https://swapi.co/api/films/1/"],"species":["https://swapi.co/api/species/1/"],"vehicles":[],"starships":[],"created":"2014-12-10T15:52:14.024000Z","edited":"2014-12-20T21:17:50.317000Z","url":"https://swapi.co/api/people/6/"},{"name":"Beru Whitesun lars","height":"165","mass":"75","hair_color":"brown","skin_color":"light","eye_color":"blue","birth_year":"47BBY","gender":"female","homeworld":"https://swapi.co/api/planets/1/","films":["https://swapi.co/api/films/5/","https://swapi.co/api/films/6/","https://swapi.co/api/films/1/"],"species":["https://swapi.co/api/species/1/"],"vehicles":[],"starships":[],"created":"2014-12-10T15:53:41.121000Z","edited":"2014-12-20T21:17:50.319000Z","url":"https://swapi.co/api/people/7/"},{"name":"R5-D4","height":"97","mass":"32","hair_color":"n/a","skin_color":"white, red","eye_color":"red","birth_year":"unknown","gender":"n/a","homeworld":"https://swapi.co/api/planets/1/","films":["https://swapi.co/api/films/1/"],"species":["https://swapi.co/api/species/2/"],"vehicles":[],"starships":[],"created":"2014-12-10T15:57:50.959000Z","edited":"2014-12-20T21:17:50.321000Z","url":"https://swapi.co/api/people/8/"},{"name":"Biggs Darklighter","height":"183","mass":"84","hair_color":"black","skin_color":"light","eye_color":"brown","birth_year":"24BBY","gender":"male","homeworld":"https://swapi.co/api/planets/1/","films":["https://swapi.co/api/films/1/"],"species":["https://swapi.co/api/species/1/"],"vehicles":[],"starships":["https://swapi.co/api/starships/12/"],"created":"2014-12-10T15:59:50.509000Z","edited":"2014-12-20T21:17:50.323000Z","url":"https://swapi.co/api/people/9/"},{"name":"Obi-Wan Kenobi","height":"182","mass":"77","hair_color":"auburn, white","skin_color":"fair","eye_color":"blue-gray","birth_year":"57BBY","gender":"male","homeworld":"https://swapi.co/api/planets/20/","films":["https://swapi.co/api/films/2/","https://swapi.co/api/films/5/","https://swapi.co/api/films/4/","https://swapi.co/api/films/6/","https://swapi.co/api/films/3/","https://swapi.co/api/films/1/"],"species":["https://swapi.co/api/species/1/"],"vehicles":["https://swapi.co/api/vehicles/38/"],"starships":["https://swapi.co/api/starships/48/","https://swapi.co/api/starships/59/","https://swapi.co/api/starships/64/","https://swapi.co/api/starships/65/","https://swapi.co/api/starships/74/"],"created":"2014-12-10T16:16:29.192000Z","edited":"2014-12-20T21:17:50.325000Z","url":"https://swapi.co/api/people/10/"}]

class App extends Component {
  constructor() {
    super();
    this.state = {
      //Use this to switch between api data and dummyData
      goOffline: true,
      starwarsChars: [],
      offlinestarwarsChars: dummyData,
      searchBarInput: '',
      filteredStarwarsChars: []
    };
  }

  componentDidMount() {
    if(!this.state.goOffline){
      this.getCharacters('https://swapi.co/api/people');
    }
    this.setState({
      filteredStarwarsChars: this.state.goOffline ? dummyData : this.state.starwarsChars
    })
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  //Controlled input method
  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    }, _ => {
        //Filter the list of characters using the setstate callback function and the filterCharacters method
        this.filterCharacters();
    });
  }

  filterCharacters() {
    //Depending on the goOffline state set the filteredStarWarsChars array using filter on this.state.offlinestarwarsChars or starwars
    if(this.state.goOffline) {
      this.setState({
        filteredStarwarsChars: this.state.offlinestarwarsChars.filter(char => char.name.toLowerCase().includes(this.state.searchBarInput.toLowerCase()))
      })
    } else {
      this.setState({
        filteredStarwarsChars: this.state.starwarsChars.filter(char => char.name.toLowerCase().includes(this.state.searchBarInput.toLowerCase()))
      })
    }
  }

  render() {
    // Used this to get dummy data from api
    //console.log(JSON.stringify(this.state.starwarsChars))
      return (
        <div className="App">
          <SearchBar searchBarInput={this.state.searchBarInput} handleInput={this.handleInput}/>
          <StarWarsCharList starwarsChars={this.state.filteredStarwarsChars} />
        </div>
      );
  }
}

export default App;
