import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './comp/Login';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Login />, document.getElementById('root'));
registerServiceWorker();
