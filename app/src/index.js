import React from 'react';
import ReactDOM from 'react-dom';
import '@carto/airship-style/dist/airship.css';
import '@carto/airship-icons/dist/icons.css';

import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './routes/home/home';
import Details from './routes/details';
import Scan from './routes/scan';
import Map from './routes/map';


ReactDOM.render(
<Router>
  <React.Fragment>
    <Route exact path="/" component={Home}/>
    <Route exact path="/scan" component={Scan}/>
    <Route exact path="/details/:id" component={Details}/>
    <Route exact path="/map" component={Map}/>
  </React.Fragment>
</Router>,
document.getElementById('root'));
registerServiceWorker();
