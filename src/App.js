import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import { Cardlist } from './Components/Cardlist/Card-list';
import { SearchBox } from './Components/Searchboxes/Search-box';
class App extends Component{
  constructor(){
    super();
    this.state={
      monster: [
      ],
      searchfield: ''
    };
  }
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users').then(
    response => response.json()).then(
      users =>this.setState({
        monster: users
      })
    );
    }
  handleChange = (e) => {
      this.setState(
        {
          searchfield:e.target.value }, ()=>
          console.log(this.state),
          console.log(e.target.value)
          
          )
        }
      

render()
{
  const {monster,searchfield}=this.state;
  const filteredMonsters=monster.filter(
        monster =>monster.name.toLowerCase().includes(
          searchfield.toLowerCase()
        )
  );
  return ( 
    <div className="App">
     
      <h1>Monsters</h1>
   
    <input
    className='search'
      type='search'
      placeholder='Search Monsters'
      onChange={ this.handleChange }      
      />
    
   
      
      
      <Cardlist monster={filteredMonsters}>
        
      </Cardlist>

    </div>
  )
}
}
export default App;
