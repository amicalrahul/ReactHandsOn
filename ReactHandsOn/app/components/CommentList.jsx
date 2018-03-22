import Comment from './Comment';
import React, { Component, PropTypes } from 'react';
import axios from 'axios';

class CommentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        };
    }
    componentDidMount() {
        axios.get('/comments')
            .then((resp) => {
                this.setState({ data: resp.data });
            })
            .catch();
    }
    render() {
        var commentNodes = null;
        if (this.state.data.length > 0) {
            commentNodes = this.state.data.map(function (comment) {
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
export default CommentList;