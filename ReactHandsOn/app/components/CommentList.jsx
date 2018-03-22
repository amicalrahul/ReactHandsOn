import Comment from './Comment';
import React, { Component, PropTypes } from 'react';
import axios from 'axios';
import store from '../stores/configureStore';

class CommentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        };
    }
    componentDidMount() {

        store.subscribe(() => {
            this.setState({});
        });
        axios.get('/comments')
            .then((resp) => {
                store.dispatch({ type: "RECEIVE_COMMENTS", data: resp.data })
            })
            .catch();
    }
    render() {
        var commentNodes = null;
        if (store.getState().data.length > 0) {
            commentNodes = store.getState().data.map(function (comment) {
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