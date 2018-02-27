import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './App.css';

class Book extends Component {
    render() {
        return (
            <div>
               <h4>{this.props.title}</h4>
            </div>
        );
    }
}
Book.propTypes = {
    title: PropTypes.string
}
export default Book;
