import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import loadable from 'react-loadable';

const LoadableNavigation = loadable({
  loader: () => import('./components/navigation/navigation'),
  loading() {
    return <span>loading split out code...</span>;
  },
});

const LoadableAdd = loadable({
  loader: () => import('./components/add/add'),
  loading() {
    return <span>loading split out code...</span>;
  },
});

const LoadableAll = loadable({
  loader: () => import('./components/all/all'),
  loading() {
    return <span>loading split out code...</span>;
  },
});

const LoadableDelete = loadable({
  loader: () => import('./components/delete/delete'),
  loading() {
    return <span>loading split out code...</span>;
  },
});

const LoadableUpdate = loadable({
  loader: () => import('./components/update/update'),
  loading() {
    return <span>loading split out code...</span>;
  },
});

const LoadableError404 = loadable({
  loader: () => import('./components/error404/error404'),
  loading() {
    return <span>loading split out code...</span>;
  },
});

const App = () => (
  <Router>
    <LoadableNavigation />
    <Switch>
      <Route path={['/add', '/']} component={LoadableAdd} exact />
      <Route path="/all" component={LoadableAll} />
      <Route path="/delete" component={LoadableDelete} />
      <Route path="/update" component={LoadableUpdate} />
      <Route component={LoadableError404} />
    </Switch>
  </Router>
);

export default App;
