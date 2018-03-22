import { createStore } from 'redux';

var defaultState = {
    data: {}
};

function comments(state = defaultState, action) {
    if (action.type === "RECEIVE_COMMENTS") {        
        return {
            // property spread. It is equivalent to creating a new state using object.assign function. 
            //Just a nicer way.It uses babel- preset-stage-3 package as its still not released yet 
            ...state,
            data: action.data
        }
    }

    return state;
}

var store = createStore(comments);

export default store;