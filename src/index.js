import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './scss/app.scss';
import App from './App';
import store from "./redux/store";
import {Provider} from 'react-redux';

ReactDOM.render(

    <Router>
        {// передаем информацию store из redux в компонент app. Любой компонент в app может получить информацию из store
        }
      <Provider store={store}>
          <App />
      </Provider>
    </Router>,
  document.getElementById('root'),
);
