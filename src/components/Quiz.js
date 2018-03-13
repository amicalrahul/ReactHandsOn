import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Book from './book';
import _ from 'underscore';
class Quiz extends Component {
    constructor(props){
        super(props);
        this.state = this.getInitialState();
        this.handleBookSelected= this.handleBookSelected.bind(this);
        this.handleContinue= this.handleContinue.bind(this);
    }
    getInitialState(){
      return  _.extend({bgClass: 'neutral',
            showContinue: false},
            this.props.data.selectGame());
    }
    handleBookSelected(title){
        var isCorrect = this.state.checkAnswer(title);
        this.setState({
            bgClass: isCorrect ? 'pass' : 'fail',
            showContinue: isCorrect
        });
    }
    handleContinue() {
        this.setState(this.getInitialState());
    }
    handleAddGame() {
        //routie('add');
    }
    render() {
        return (
            <div>
               <div className="row"> 
                <div className="col-md-4">
                    <img src={this.state.author.imageUrl} alt="" />
                </div>
                <div className="col-md-7">
                    {this.state.books.map(function(b){
                        return <Book onBookSelected={this.handleBookSelected} title={b} key={b} />;
                    }, this)}
                </div>
                <div className={"col-md-1 " + this.state.bgClass}></div>
               </div>
               {this.state.showContinue ? (
                        <div className="row">
                            <div className="col-md-12">
                                <input onClick={this.handleContinue} type="button" className="btn btn-primary btn-lg pull-right" value="Continue" />
                            </div>                        
                        </div>) : <span/>
                    }  
            </div>
        );
    }
}
Quiz.propTypes = {
    data: PropTypes.array.isRequired
}
export default Quiz;
