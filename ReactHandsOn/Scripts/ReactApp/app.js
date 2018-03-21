import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import CommentBox from './CommentBox';

//render((
//  <Router history={browserHistory}>
//        <Route path="/" component={CommentBox}>        
//      </Route>
//  </Router>
//), document.getElementById('root'));
//React.render(<CommentBox />, document.getElementById('root'));
render(
    <CommentBox url="/comments" submitUrl="/comments/new" pollInterval={50000} />,
    document.getElementById('root')
);