import { createStore } from 'redux';
import { ActionTypes as types } from '../constants';

var defaultState = {
    data: {},
    author: '',
    text: ''
};

function comments(state = defaultState, action) {
    switch (action.type) {
        case (types.RECEIVE_COMMENTS):
            return {
                // property spread. It is equivalent to creating a new state using object.assign function. 
                //Just a nicer way.It uses babel- preset-stage-3 package as its still not released yet 
                ...state,
                data: action.data
            }
        case (types.CHANGE_AUTHOR_NAME):
            return {
                ...state,
                author: action.data.author
            }
        case (types.CHANGE_AUTHOR_TEXT):
            return {
                ...state,
                text: action.data.text
            }
    }
    return state;
}

var store = createStore(comments);

export default store;