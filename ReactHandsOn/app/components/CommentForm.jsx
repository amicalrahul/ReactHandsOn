import React, { Component, PropTypes } from 'react';
import { ActionTypes as types } from '../constants';
import store from '../stores/configureStore';
class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.handleAuthorChange = this.handleAuthorChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleAuthorChange(e) {
        store.dispatch({ type: types.CHANGE_AUTHOR_NAME, data: { author: e.target.value } });
        //this.setState({ author: e.target.value });
    };
    handleTextChange(e) {
        store.dispatch({ type: types.CHANGE_AUTHOR_TEXT, data: { text: e.target.value } });
        //this.setState({ text: e.target.value });
    };
    handleSubmit(e) {
        e.preventDefault();
        var author = this.props.author.trim();
        var text = this.props.text.trim();
        if (!text || !author) {
            return;
        }
        this.props.onCommentSubmit({ Author: author, Text: text });
        this.setState({ author: '', text: '' });
    };
    render() {
        return (
            <form className="commentForm" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Your name"
                    value={this.props.author}
                    onChange={this.handleAuthorChange}
                />
                <input
                    type="text"
                    placeholder="Say something..."
                    value={this.props.text}
                    onChange={this.handleTextChange}
                />
                <input type="submit" value="Post" />
            </form>
        );
    }
};
export default CommentForm;