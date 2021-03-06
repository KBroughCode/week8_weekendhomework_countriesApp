import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import {createStore, compose, applyMiddleware} from 'redux';
import FormContainer from './containers/FormContainer';
import CountriesContainer from './containers/CountriesContainer';
import reducer from './reducers/index.js';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store = {store}>
  <div className = "page-content">
  <div className ="form">
    <FormContainer />
  </div>
  <br/>
  <div className = "background">
    <div className ="container">
      <div className = "cover">
        <div className="passport">PASSPORT</div>
      </div>
        <div className="details">
          <CountriesContainer className = "countries-container"/>
        </div>
      </div>
    </div>
  </div>
  </Provider>,
   document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
