import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';



ReactDOM.render(<Provider store={store}>
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App/>
  </BrowserRouter>
</Provider>, document.getElementById('root'));
registerServiceWorker();
