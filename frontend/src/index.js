import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

ReactDOM.render(<App/>, document.getElementById('root'));

registerServiceWorker();
