import React, {Component} from 'react';

export default class FilterString extends Component{

  constructor(){
    super()
    this.state = {
      unFilteredArray: ['check','one','two','three'],
      userInput: '',
      filteredArray: []
    }
  }


  handleInput(event){
    this.setState({
      userInput: event
    })
  }

  handleButton(userInput){
    var copyArr = this.state.unFilteredArray.slice();

    var newArr = copyArr.filter((str) => str.includes(userInput));

    this.setState({
      filteredArray: newArr
    })
  }



  render(){
    return (
      <div className='puzzleBox filterStringPB'>
        <h4> Filter String </h4>
        <span className='puzzleText'>Original: { JSON.stringify(this.state.unFilteredArray) }</span>
        <input className='inputLine' onChange={ event => this.handleInput(event.target.value) }/>
        <button className='confirmationButton' onClick={ (userInput) => this.handleButton(this.state.userInput) }> Submit </button>
        <span className='resultsBox filterStringRB'>Filtered: { JSON.stringify(this.state.filteredArray) }</span>
      </div>
    )
  }
}