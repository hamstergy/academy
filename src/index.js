import React from 'react';
// import ReactDOM from 'react-dom';
import { hydrate, render } from 'react-dom';
// import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';


const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
    </ThemeProvider>
  , rootElement);
} else {
  render(
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
    </ThemeProvider>
  , rootElement);
}

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
