import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import PostList from './PostList'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<PostList />, document.getElementById('root'));
registerServiceWorker();
