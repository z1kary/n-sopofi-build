import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.scss'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import rootReducer from './reducers'
import { getUsers } from './actions/usersActions'

const store = createStore(
  rootReducer, composeWithDevTools(applyMiddleware(thunk))
)

store.dispatch(getUsers())

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);