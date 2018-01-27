import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers';
import { combineReducers } from 'redux';

const todoApp = combineReducers({
    rootReducer
})

let store = createStore(todoApp);

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();

export default store;