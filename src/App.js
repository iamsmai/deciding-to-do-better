import React, { Component } from 'react';
import { Column, Row } from 'simple-flexbox';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';

import About from './about.js'
import ListOfIdeas from './listOfIdeas.js'
import Progress from './progress.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header></Header>
          <Route exact path='/' component={About} />
          <Route path='/2019' component={ListOfIdeas} />
          <Route path='/progress' component={Progress} />
        </div>
      </Router>
    )
  }
}

class Header extends Component {
  render() {
    return (
      <Row className='header-title' flex='0 0 .5rem' wrap={true}>
        <Column flex='2'>
          <h1>Deciding To Do Better</h1>
        </Column>
        <Column className='header-bar' flex='1' vertical='center' horizontal='center'>
          <Row vertical='center'>
            <Link to='/'>
              <p className='header-link'>About</p>
            </Link>
            <Link to='/2019'>
              <p className='header-link'>2019</p>
            </Link>
            <Link to='/progress'>
              <p className='header-link'>Progress</p>
            </Link>
          </Row>
        </Column>
      </Row>
    )
  }
}

export default App;