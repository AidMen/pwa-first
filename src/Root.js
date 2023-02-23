import React, { Component } from 'react';
import { Provider } from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createHistory from 'history/createBrowserHistory'

import App  from './containers/App/App';

import { ConnectedRouter } from 'react-router-redux'

import { configureStore } from './store/configureStore'

const history = createHistory()
const store = configureStore({}, history)

const Root = (props) => {
  return (
      <MuiThemeProvider>
        <Provider store={store} >
          <ConnectedRouter history={history}>
            <App />
          </ConnectedRouter>  
        </Provider>
      </MuiThemeProvider>
  )
}
export default Root;
