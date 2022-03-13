import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style.scss';
import 'bootstrap/dist/js/bootstrap.js';
import store from './store/store'
import { StrictMode } from 'react';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);

reportWebVitals();