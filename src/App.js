
import './App.css';
import {Component} from 'react';

import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component{

  constructor() {
    //calling the super fuction allows to access this.state variables
    super();
    
    this.state = {
      monsters : [],
      searchField : " "
    };

    //this.handleChange = this.handleChange.bind(this);
    //we cannot bind every function that we write in order to set the context
    // that's when we use arrow functions
  }


  // arrow functions set the context too where he function was defined in the first place
  handleChange = (e) => {
    this.setState({searchField:e.target.value})
  }

  //componentDidMount is a react life cycle method
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}))
  }

  render() {

    //Destructuring: same as const monsters = this.state.monsters;
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter( monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()))
    

    return (
      
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder= "Search monsters" handleChange = {this.handleChange} />
        <CardList monsters= {filteredMonsters}></CardList>
      </div>
    )

  }
}

export default App;
