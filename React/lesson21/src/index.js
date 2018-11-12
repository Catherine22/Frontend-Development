import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Exercise from './Exercise';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Exercise />, document.getElementById('root'));
serviceWorker.unregister();
