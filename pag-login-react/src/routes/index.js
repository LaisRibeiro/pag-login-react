import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import TelaLogin from '../views/TelaLogin';

export default function Routes() {
    return (
      <Router>
        <Switch>
            <Route exact path="/" component={TelaLogin}/>
        </Switch>
    </Router>
  );
}
