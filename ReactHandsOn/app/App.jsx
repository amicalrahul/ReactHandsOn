import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import CommentList from './components/CommentList';

class AppComponent extends React.Component {
    render() {
        return (
            <div>
                <CommentList />
            </div>
        )
    }
}


//ReactDOM.render(<AppComponent />, document.getElementById('root'));
render(
    <CommentList />,
    document.getElementById('root')
);