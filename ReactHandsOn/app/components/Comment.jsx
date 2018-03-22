import React, { Component, PropTypes } from 'react';
import Markdown from 'react-remarkable';

class Comment extends Component {
    render() {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                <Markdown source={this.props.children.toString()} />
            </div>
        )
    }
}
export default Comment;