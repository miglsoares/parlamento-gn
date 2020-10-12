import React from 'react';
import ReactDOM from 'react-dom';

import { data } from './data';
import './styles.css';

import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App data={data} />
  </React.StrictMode>,
  document.getElementById('root')
);
