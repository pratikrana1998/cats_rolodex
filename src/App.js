/* To get the class component */
import { Component } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      /* Initially the list of cats is empty */
      cats: [],
      searchField: '',
    }
  };

  /* Runs whenever the component mounts */
  componentDidMount() {
    /* Fetches object from API, extracts json object and assigns it to the array, re-renders after setState() */
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => this.setState(() => {
        return { cats: users };
      },
        () => {
          console.log(this.state);                                                    /* Log the output to console */
        }
      ));
  };

  /* Moving the searchChange function out, so that it only gets built once */
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();              /* 'AaaAa' => 'aaaaa' changed to lowercase*/

    this.setState(() => {                                             
      /* To leverage the value to search string from input to filteredcats we move it up to the state */
      return { searchField };
    });
  };

  /* To render the component */
  render() {

    const { cats, searchField } = this.state;
    const { onSearchChange } = this;

    /* We search through the list of cats based on search field, and return only those that match */
    const filteredcats = cats.filter((cat) => {
      return cat.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      /* Passing the required handlers and props for the components */
      <div className="App">
        <h1 className='app-title'>Cats Rolodex</h1>

        <SearchBox 
          onChangeHandler={ onSearchChange } 
          placeholder='search cats' 
          className='cats-search-box' 
        />
        <CardList cats={ filteredcats } />
      </div>
    );
  }
}

export default App;
