// states are used when you want to change the items like newstitle and news description
// .props are used when you dont want to change the items newstitle and description
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

export default class App extends Component {

  render() {
    return (
      <div>
       <NavBar/>
       <News  country="in"/>
      </div>
    )
  }
}
