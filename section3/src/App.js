import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Presentational Components
import Validator from './Presentational/Validator'
import Char from './Presentational/Char'

class App extends Component {

  state = {
    text: '',
    textLength: 0
    
  }

  inputText = event =>{
    this.setState({
      text: event.target.value,
      textLength: (event.target.value).length
    })
  }

  textRemover = index =>{
    let character = [...this.state.text]
    character.splice(index,1)
    let text = character.join("")
    
      
    this.setState({
        text: text
      })
  }
  
  
  render(){
    let Characters = (
      <div>
        {
          [...this.state.text].map((character, i)=>{
            return <Char 
              click = {()=>this.textRemover(i)}
              text = {character}
              key = {i}
              
            />
          })
        }
      </div>
    )

    return(
      <div>
        <input type="text" maxLength="16" onChange={(event)=>this.inputText(event)} value={this.state.text}></input>
        {/* <p>{this.state.text}</p> */}
        {/* <p>{this.state.textLength}</p> */}
        <p>Type a word. It must be no less than 5 characters, and no more than 15.</p>
        <Validator textLength = {this.state.textLength}/>
        {Characters}
       
      </div>
     
    )
  }

}

export default App;



