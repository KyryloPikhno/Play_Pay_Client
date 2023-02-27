import {BrowserRouter} from "react-router-dom";
import * as ReactDom from "react-dom";
import {Provider} from "react-redux";
import React from 'react';

import {setupStore} from "./redux";
import App from './App';


const store = setupStore()

ReactDom.render(
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>
  , document.getElementById('root'));

