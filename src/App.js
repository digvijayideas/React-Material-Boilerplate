import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material/styles';

import Landing from './components/Landing';

export default ({ history }) => {
  return (
    <div>
       <StyledEngineProvider injectFirst>
       <Router history={history}>
          <Switch>
            <Route path="/" component={Landing} />
          </Switch>
        </Router>
       </StyledEngineProvider>

    </div>
  );
};
