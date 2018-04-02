import React from 'react';
import { Route, IndexRoute } from 'react-router';
import AppComponent from './App';
import CommentBox from './components/CommentBox';
import CoursesPage from './components/courses/CoursesPage'


export default (
    
    <Route path="/" component={AppComponent}>
        <IndexRoute component={CommentBox} />
        <Route path="home/courses" component={CoursesPage} />
    </Route>
);
