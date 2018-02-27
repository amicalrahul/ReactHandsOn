import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

var data = ["this","that"];

ReactDOM.render(<App books={data} />, document.getElementById('root'));
registerServiceWorker();
