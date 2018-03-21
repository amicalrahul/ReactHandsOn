
import Comment from'./Comment';
import React, { Component, PropTypes } from 'react';
class CommentList extends Component {
    render() {
        var commentNodes = null;
        if (this.props.data.length >0) {
            commentNodes= this.props.data.map(function (comment) {
                return (
                    <Comment author={comment.Author} key={comment.Id}>
                        {comment.Text}
                    </Comment>
                )
            });
        }
        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
};
//module.exports = CommentList;
export default  CommentList;