import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter as Router,Switch } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
import Products from './Products';
import Brands from './Brands';
import Articles from './Articles';
import ContactUs from './ContactUs';
import Layout from './Layout';


const routing = (
  <Router>

<Layout>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/products" component={Products} />
        <Route path="/brands" component={Brands} />
        <Route path="/articles" component={Articles} />
        <Route path="/contactus" component={ContactUs} />
        </Switch>
  </Layout>
  </Router>

  )
  
  ReactDOM.render(routing, document.getElementById('root'))




/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
*/