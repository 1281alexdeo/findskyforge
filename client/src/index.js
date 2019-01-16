import React from 'react';
import ReactDOM from 'react-dom';
import { registerObserver } from 'react-perf-devtool';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(<App />, document.getElementById('root'));

registerObserver();
serviceWorker.unregister();
