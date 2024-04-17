import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
// import NewsItem from './components/NewsItem';

import React, { Component } from 'react'

export default class App extends Component {

  render() {
    return (
      <div>
       <Navbar/>
       <News pageSize={5} country="in"/>
       {/* <NewsItem/> */}
      </div>
    )
  }
}
