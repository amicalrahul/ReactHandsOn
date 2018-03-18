
import Comment from'./Comment';
import React from'react';
import PropTypes from'prop-types';
class CommentList extends React.Component {
    render() {
        var commentNodes = this.props.data.map(function (comment) {
            return (
                <Comment author={comment.Author} key={comment.Id}>
                    {comment.Text}
                </Comment>
            )
        });
        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
};
module.exports = CommentList;
//export default  CommentList;