import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// ====================================================== Cat Exercise

import Cat from './Presentational/Cat';

class App extends Component {

  state = {
    cats: [
      {name: 'Nacheaux', age: 5},
      {name: 'Callie', age: 11},
      {name: 'Midnight', age: 10}
    ],
    otherState: `Still Lil' Nacheaux but the dividends not little.`,
    showCats: false
  }

  switchNameHandler = () => {
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

toggleCat=()=>{
 const doesShow = this.state.showCats;
 this.setState({showCats: !doesShow})
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
    
    let myCats = null;

    if (this.state.showCats){
      myCats = (
        <div> 
          {this.state.cats.map(cat =>{
            return <Cat 
            name = {cat.name} 
            age={cat.age} />
          })}
            {/* <Cat
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
              name={this.state.cats[2].name}
              age={this.state.cats[2].age}/> */}
          </div>
      );
    }

    return (
      <div className="App">
        <button 
          style ={style}
          onClick={this.toggleCat}>Toggle Kittens</button>
          {myCats}
        {/* { 
          this.state.showCats ?
          // could also write as: this.state.showCats === true ? */}
          
          {/* : null
        }  */}
      </div>
    );
  }
}


export default App;



// ===================================================== Input/Output Exercise

// import UserInput from './Presentational/UserInput';
// import UserOutput from './Presentational/UserOutput';

// class App extends Component{

//   state = {
//     name: 'Paul'
//   }

//   eventHandler = (event) =>{
//     this.setState({
//       name: event.target.value
//     })
//   }

//   render(){
//     return(
//       <div>
//         <UserInput
//         name={this.state.name}
//         changed={this.eventHandler}
//         />

//         <UserOutput
//         name={this.state.name}
//         />
//       </div>
//     )
//   }

// }