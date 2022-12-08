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
    return (
      /* [ { name: 'Pratik' }, { name: 'Jash' } ] */
      <div className="App">
        <input className='search-box' type='search' placeholder='search monsters' onChange={(event) => {

          /* 'AaaAa' => 'aaaaa' */
          const searchString = event.target.value.toLocaleLowerCase();

          /* We search through the list of monsters based on search string(change to lowercase), and return only those that match */
          const filteredMonsters = this.state.monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchString);
          });

          /*Then set the new state so that react can re-render */
          this.setState(() => {
            return { monsters: filteredMonsters };
          });
        }} />
        {
          this.state.monsters.map((monster) => {
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
