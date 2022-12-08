/* To get the class component */
import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      /* Initially the list of monsters is empty */
      monsters: [],
      searchField: '', 
    }
  }

  /* Runs whenever the component mounts */
  componentDidMount() {
    /* Fetches object from API, extracts json object and assigns it to the array, re-renders after setState() */
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => this.setState(() => {
        return { monsters: users };
      },
        () => {
          console.log(this.state);                                                    /* Log the output to console */
        }
      ));
  }

  /* To render the component */
  render() {

    /* We search through the list of monsters based on search field, and return only those that match */
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    });

    return (
      /* [ { name: 'Pratik' }, { name: 'Jash' } ] */
      <div className="App">
        <input className='search-box' type='search' placeholder='search monsters' onChange={(event) => {

          /* 'AaaAa' => 'aaaaa' changed to lowercase*/
          const searchField = event.target.value.toLocaleLowerCase();

          /*Then set the new state so that react can re-render */
          this.setState(() => {
            /* To leverage the value to search string from input to filteredMonsters we move it up to the state */ 
            return { searchField };
          });
        }} />
        {
          /* Iterate over filteredMonsters instead of original one so that we don't modify the original */
          filteredMonsters.map((monster) => {
            return <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          })
        }
      </div>
    );
  }
}

export default App;
