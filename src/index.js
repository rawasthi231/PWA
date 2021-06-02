import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import swDev from "./swDev";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./Redux/Reducers/index";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

swDev();