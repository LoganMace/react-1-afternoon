import React, {Component} from 'react';

export default class EvenAndOdd extends Component{

  constructor(){
    super()
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ''
    }
  }

  handleInputChange(event){
    this.setState({
      userInput: event
    });
  };
  handleButton(userInput){
    var arr = userInput.split(',');
      var evens = [];
      var odds = [];

      for(let i = 0; i<arr.length; i++){
        if(arr[i] % 2 === 0){
          evens.push(arr[i]);
        }else{
          odds.push(arr[i]);
        }
      }

    this.setState({
      evenArray: evens,
      oddArray: odds
    })
  }



  render(){
    return (
      <div className='puzzleBox evenAndOddPB'>
        <h4> Evens and Odds </h4>
        <input className='inputLine' onChange={ event => this.handleInputChange(event.target.value) }/>
        <button className='confirmationButton' onClick={ () => this.handleButton(this.state.userInput) }> Submit </button>
        <span className='resultsBox'>Evens: {JSON.stringify(this.state.evenArray)}</span>
        <span className='resultsBox'>Odds: {JSON.stringify(this.state.oddArray)}</span>
      </div>
    )
  }
}