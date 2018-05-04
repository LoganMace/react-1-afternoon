import React, {Component} from 'react';

export default class Sum extends Component{

  constructor(){
    super()
    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    }
  }

  handleNum1(num1){
    this.setState({
      number1: parseInt(num1, 10)
    })
  }

  handleNum2(num2){
    this.setState({
      number2: parseInt(num2, 10)
    })
  }

  handleSum(num1, num2){
    this.setState({
      sum: num1 + num2
    })
  }


  render(){
    return (
      <div className='puzzleBox sumPB'>
        <h4> Sum </h4>
        <input className='inputLine' onChange={ event => this.handleNum1(event.target.value) }/>
        <input className='inputLine' onChange={ event => this.handleNum2(event.target.value) }/>
        <button className='confirmationButton' onClick={ () => this.handleSum(this.state.number1, this.state.number2) }> Submit </button>
        <span className='resultsBox'> Sum: {this.state.sum} </span>
      </div>
    )
  }
}