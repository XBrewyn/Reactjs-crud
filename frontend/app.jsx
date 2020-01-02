import React from 'react';
import { Router } from '@reach/router';
import {
  LoadableNavigation,
  LoadableAdd,
  LoadableAll,
  LoadableDelete,
  LoadableUpdate,
  LoadableError404,
} from './loadables/loadables';

const App = () => (
  <>
    <LoadableNavigation />
    <Router>
      <LoadableAdd path="/" />
      <LoadableAdd path="add" />
      <LoadableAll path="all" />
      <LoadableDelete path="delete" />
      <LoadableUpdate path="update" />
      <LoadableError404 default />
    </Router>
  </>
);

export default App;
