import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import axios from 'axios';
import CommentBox from './components/CommentBox';
import store from './stores/configureStore';
import { connect } from 'react-redux';

class AppComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        };
    }
    componentDidMount() {

        //store.subscribe(() => {
        //    this.setState({});
        //});
        axios.get('/comments')
            .then((resp) => {
                store.dispatch({ type: "RECEIVE_COMMENTS", data: resp.data })
            })
            .catch();
    }
    render() {
        return (
            <div className="container-fluid">                
                {this.props.children}
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        state
    };
}
export default connect((state, props) => {
    return {
        data: state.data
    }
})(AppComponent);
//export default connect(mapStateToProps)(AppComponent);


//render(<Provider store={store}><AppComponent /></Provider>, document.getElementById('root'));
