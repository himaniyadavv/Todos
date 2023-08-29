import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; 
import reportWebVitals from './reportWebVitals'; 
//import any new file
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* add here new file and also add export default before function in new file */}
  </React.StrictMode>
);


reportWebVitals();
