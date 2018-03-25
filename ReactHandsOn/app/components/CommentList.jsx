import Comment from './Comment';
import React, { Component, PropTypes } from 'react';
import axios from 'axios';
import store from '../stores/configureStore';

class CommentList extends Component {
    render() {
        var commentNodes = null;
        if (this.props.authData.length > 0) {
            commentNodes = this.props.authData.map(function (comment) {
                return (
                    <Comment author={comment.Author} key={comment.Id}>
                        {comment.Text}
                    </Comment>
                )
            });
        }
        return (
            <div className="commentList">
                <div>{commentNodes}</div>
            </div>
        );
    }
};
export default CommentList;