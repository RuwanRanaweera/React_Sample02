import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
//import * as serviceWorker from './serviceWorker';


ReactDOM.render(
<BrowserRouter>
    <App />
    </BrowserRouter>,
  document.getElementById('root')
);

//ServiceWorker.unregister();
reportWebVitals();
