import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landingpage from '../src/pages/Landingpage'
import Notfound from '../src/pages/Notfound'

function Routes() {
    return (
      <Router>
          <Switch>
            <Route path="/" exact component={Landingpage} /> 
            <Route path="*" component={Notfound} />
          </Switch>
      </Router>
    );
  }
  export default Routes;