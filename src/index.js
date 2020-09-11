import React from 'react';
import ReactDOM from 'react-dom';
import CongressChart from './components/CongressChart';

import './styles.css';

ReactDOM.render(
  <React.StrictMode>
    {CongressChart()}
  </React.StrictMode>,
  document.getElementById('root')
);

