import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './App.css';

class Book extends Component {
    constructor(props) {
        super(props);
        this.handleClick= this.handleClick.bind(this);
    }
    handleClick =() =>{
        this.props.onBookSelected(this.props.title);
    }
    render() {
        return (
            <div onClick={this.handleClick} className="answer">
               <h4>{this.props.title}</h4>
            </div>
        );
    }
}
Book.propTypes = {
    title: PropTypes.string,
    onBookSelected: PropTypes.func
}
export default Book;
