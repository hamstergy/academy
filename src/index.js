import React from 'react';
// import ReactDOM from 'react-dom';
import { hydrate,render } from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
// import './index.css';
import App from './App';
import Near from './Near';
import Featured from './Featured';
import * as serviceWorker from './serviceWorker';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import Footer from './Footer';
import Geo from './Geo';


const rootElement = document.getElementById("root");
const routing = (
  
  <Router>
    <div>
      <Geo />
    <ThemeProvider theme={theme}>
    <CssBaseline />
      <Footer />
      <Route exact path="/" component={App} />
      <Route path="/near" component={Near} />
      <Route path="/featured" component={Featured} />
    </ThemeProvider>
    </div>
  </Router>
)
if (rootElement.hasChildNodes()) {
    hydrate(routing
  , rootElement);
} else {
  render(routing
  , rootElement);
}

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
