import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import TelaLogin from '../views/TelaLogin';
import TelaRegister from '../views/TelaRegister';

export default function Routes() {
    return (
      <Router>
        <Switch>
            <Route exact path="/" component={TelaLogin}/>
            <Route path="/register-user" component={TelaRegister}/>
        </Switch>
    </Router>
  );
}
