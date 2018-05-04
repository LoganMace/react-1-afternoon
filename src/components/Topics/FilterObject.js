import React, {Component} from 'react';

export default class FilterObject extends Component{

  constructor(){
    super()
    this.state = {
      friends: [
        {
          name: 'Gabi',
          age: 23,
          height: 5
        },
        {
          name: 'Nick',
          nickname: 'Jet',
          email: 'nick@nick.com',
          height: 5.8
        },
        {
          name: 'Sean',
          age: 30,
          email: 'sean@sean.com'
        }
      ],
      userInput: '',
      filteredFriends: []
    }
  }

  handleInput(event){
    this.setState({
      userInput: event
    })
  }

  handleButton(userInput){
    var friends = this.state.friends;
    var filteredFriends = [];
    for(var i=0;i<friends.length;i++){
      if(friends[i].hasOwnProperty(userInput)){
        filteredFriends.push(friends[i]);
      }
    }
    this.setState({
      filteredFriends: filteredFriends
    })
  }


  render(){
    return (
      <div className='puzzleBox filterObjectPB'>
        <h4> Filter Object </h4>
        <span className='puzzleText'>Original: {JSON.stringify(this.state.friends, null, 10)}</span>
        <input className='inputLine' onChange={ event =>  this.handleInput(event.target.value)}/>
        <button className='confirmationButton' onClick={ (userInput) =>  this.handleButton(this.state.userInput)}> Submit </button>
        <span className='resultsBox filterObjectRB'>Filtered: {JSON.stringify(this.state.filteredFriends, null, 10)}</span>
      </div>
    )
  }
}