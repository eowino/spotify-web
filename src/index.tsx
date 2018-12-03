import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';

import './index.css';
import './icons.css';
import './fonts/CircularSpUIv3T-Bold.woff2';
import './fonts/CircularSpUIv3T-Book.woff2';
import './fonts/CircularSpUIv3T-Light.woff2';
import './fonts/spoticon_regular_2.woff2';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
