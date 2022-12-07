//To get the class component
import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      name: {firstName: 'Pratik', lastName: 'Rana'},
      university: 'IIT Guwahati',
    }
  }

  //To render the component
  render() {

    this.state = {
      monsters: [
        {
          name: 'Lynda',
          id: 'ahsbadjka',
        },
        {
          name: 'Frank',
          id: 'jfay39r23',
        },
        {
          name: 'Jack',
          id: 'hjasbfa32',
        }
      ]
    }

    return (
      <div className="App">
        {
          this.state.monsters.map((monster) => {
            return <div key={ monster.id }>
              <h1>{ monster.name }</h1>
              </div>
          })
        }
      </div>
    );
  }
}

export default App;
