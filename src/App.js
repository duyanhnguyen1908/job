import React from 'react';
// import { ThemeProvider, CssBaseline } from '@material-ui/core';
// import theme from './global/styles/theme';
// import cssVariables from './global/styles/variables';
import Routers from './router';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import './App.css'
import { Outlet } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store/index';

export default function App() {
  return (
    <Provider store={store} className="App">
        <Routers />
        <Outlet/>
      </Provider>
  );
}
