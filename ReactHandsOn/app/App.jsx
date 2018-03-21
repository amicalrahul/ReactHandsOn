import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Comment from './components/Comment';

class AppComponent extends React.Component {
    render() {
        return (
            <div>
                <Comment />
            </div>
        )
    }
}


//ReactDOM.render(<AppComponent />, document.getElementById('root'));
render(
    <Comment />,
    document.getElementById('root')
);