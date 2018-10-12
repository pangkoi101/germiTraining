import React from 'react';

import { Header } from "../components/Header";
import { Home } from "../components/Home";
import { Display } from "../components/Display";


// const userList = {
//   name: 'marc',
//   age: 26,
//   hobbies: [],
//   location: ['cebu', 'davao', 'cavite', 'bulacan']

// }

export class Main extends React.Component {

  constructor() {
    super();


    const userList = {
      name: 'marc',
      age: 26,
      hobbies: [],
      location: ['cebu', 'davao', 'cavite', 'bulacan']
    
    }
    
    

    this.state = {
      headerTitle10: "TITLEz",
      headerTitle2: "TITLE2",
      title: 'tester',
      userList : userList,
      textboxValue : null

    }
  }


onChange(event, a){
    this.setState({
      textboxValue : a
    })
  }

 

  onAddNewHobby() {
    
    const newHobbies10 = this.state.userList.hobbies.push(this.state.textboxValue);

    this.setState({
      userList : {...this.state.userList , newHobbies10 }
    })
  }

  onEditHobby(index){
    const newHobbies10 = this.state.userList.hobbies[index] = this.state.textboxValue

    this.setState({
      userList : {...this.state.userList , newHobbies10 }
    })
  }

  render() {

    return (
      <div>

        <Header
          title={this.state.headerTitle10}
          title2={this.state.headerTitle2}
          headerTitle10={this.state.headerTitle10}
        />

     
        <Home
          onChange={this.onChange.bind(this)}
        />

        <Display
          userList={this.state.userList}
          onAddNewHobby={this.onAddNewHobby.bind(this)}
          onEditHobby = { this.onEditHobby.bind(this)}
        />



      </div>
    );
  }
}
