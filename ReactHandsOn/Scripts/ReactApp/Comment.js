
import React, { Component, PropTypes } from 'react';
class Comment extends Component {
    rawMarkup() {
        //var md = new Remarkable();//(global.Remarkable || window.Remarkable)();;
        //var rawMarkup = md.render(this.props.children.toString());
        var rawMarkup = this.props.children.toString();
        return { __html: rawMarkup };
    };
    render() {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                <span dangerouslySetInnerHTML={this.rawMarkup()} />
            </div>
        );
    }
};
//module.exports = Comment;
export default  Comment;