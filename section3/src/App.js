import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Cat from './Presentational/Cat';

class App extends Component {

  state = {
    cats: [
      {name: 'Nacheaux', age: 5},
      {name: 'Callie', age: 11},
      {name: 'Midnight', age: 10}
    ],
    otherState: `Still Lil' Nacheaux but the dividends not little.`
  }

  switchNameHandler = (newName) => {
    this.setState({
      cats: [
        {name: 'Piper', age: 2},
        {name: 'Sugar', age: 0.25},
        {name: 'Spice', age: 0.25},
      ]
    })
  }

nameChangedHandler = (event)=> {
  this.setState({
    cats: [
    {name: 'Piper', age: 2},
    {name: event.target.value, age: 0.25},
    {name: 'Spice', age: 0.25},
    ]
  })
}

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'sans-serif',
      border: '1px solid blue',
      padding: '8px',
      marginTop: '10px',
      borderRadius: '15px 15px',
      cursor: 'pointer',
      fontWeight: 'bold',
      color:'red'
    };

    return (
      <div className="App">
        <button 
          style ={style}
          onClick={this.switchNameHandler}>Switch Name</button>
        <Cat
          name={this.state.cats[0].name}
          age={this.state.cats[0].age}/>

        <Cat
          name={this.state.cats[1].name}
          age={this.state.cats[1].age}
          click={this.switchNameHandler.bind(this, 'Meow!!!!')}
          changed={this.nameChangedHandler}
          >I like scratching furniture and eating treats.
        </Cat>

         <Cat
          name={this.state.cats[0].name}
          age={this.state.cats[0].age}/>
      </div>
    );
  }
}

export default App;
