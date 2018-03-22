import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import CommentList from './components/CommentList';
import store from './stores/configureStore';

class AppComponent extends React.Component {
    render() {
        return (
            <div>
                <CommentList authData={store.getState().data} />
            </div>
        )
    }
}


render(<AppComponent />, document.getElementById('root'));
