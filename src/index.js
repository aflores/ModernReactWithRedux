import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/app';
import reducers from './reducers';

class Hola extends React.Component {
  render() {
    return <h1>Hola</h1>;
  }
}

class Adios extends React.Component {
  render() {
    return <h1>Adios</h1>;
  }
}

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path="/hola" component={Hola} />
        <Route path="/adios" component={Adios} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('.container'),
);
