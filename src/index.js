import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Redux from './Redux';

import Store from './Store';
import {Provider} from 'react-redux';

 
ReactDOM.render(
  <>
  <App />
  <Provider store={Store}>
  <Redux />
  </Provider>
  
  </>
  ,
  document.getElementById('root')
);


