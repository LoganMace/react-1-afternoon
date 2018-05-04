import React, {Component} from 'react';

export default class Palindrome extends Component{

  constructor(){
    super()
    this.state = {
      userInput: '',
      palindrome: ''
    }
  }

  handleInput(event){
    this.setState({
      userInput: event
    })
  }

  handleButton(userInput){
      if(userInput === userInput.split('').reverse().join('')){
        this.setState({palindrome: 'true'});
      }else{
        this.setState({palindrome: 'false'})
      }
  }

  render(){
    return (
      <div className='puzzleBox filterStringPB'>
        <h4> Palindrome </h4>
        <input className='inputLine' onChange={ event => this.handleInput(event.target.value) }/>
        <button className='confirmationButton' onClick={ (userInput) => this.handleButton(this.state.userInput) }> Submit </button>
        <span className='resultsBox'>Is palindrome: { this.state.palindrome }</span>
      </div>
    )
  }
}