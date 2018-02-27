import React, {Component} from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
import Book from './book';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {
          this.props.books.map(function (b) {
           return <Book title={b} />
          })
        }
      </div>
    );
  }
}
App.propTypes = {
  books: PropTypes.array.isRequired
}
export default App;