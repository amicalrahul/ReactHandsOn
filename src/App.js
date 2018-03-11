import React, {Component} from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import Quiz from './Quiz';

class App extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <div class="container">
            <h1>Author Quiz</h1>
            <p>Select the book written by Author shown</p>
          </div>
        </Jumbotron>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Quiz data={this.props.books} />
        </div>
      </div>
    );
  }
}
App.propTypes = {
  books: PropTypes.array.isRequired
}
export default App;