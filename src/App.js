import React, { useState, useEffect } from "react";
import './App.css';
//Don't need to import Card because CardList imports it
import CardList from './components/cardlist/cardlist.component';
import SearchBar from './components/searchbar/searchbar.component';
//axios
import axios from 'axios';



function App() {
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([]);
  const [searchInput, setSearchInput] = useState("");;

  //Initial setting of monsters
  //Using FETCH
  /*useEffect(() => {
    const fetchMonsters = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const monsters = await response.json();
      setMonsters(monsters);
  };
  fetchMonsters();
}, []);//<- ***That empty bracket is for initial loading ONCE,*************
  //Otherwise will continue fetching almost like an infinite loop
  //Two prints are for initial load and then first fetch*/

  //Using Axios
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios('https://jsonplaceholder.typicode.com/users',
      );
      setMonsters(response.data);
    };
    fetchUsers();
  }, []);//

  //Using Axios .get ??

  useEffect(() => {
      let filtered = [];
      if (searchInput === "") {
        filtered = monsters;
      } else {
        filtered = monsters.filter(monster => 
          monster.name.toLowerCase().includes(searchInput.toLowerCase())
          );
      }
      setFilteredMonsters(filtered);
    }, [monsters, searchInput]); //Every time monster loaded, then when it changes

  const handleInput = e => {
    setSearchInput(e.target.value);
  }
  return (
    <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBar 
        placeholder='Search Monster'
        handleInput={handleInput}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
