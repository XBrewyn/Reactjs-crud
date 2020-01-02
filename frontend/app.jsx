import React from 'react';
import { Router } from '@reach/router';
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
  <>
    <LoadableNavigation />
    <Router>
      <LoadableAdd path="/" />
      <LoadableAdd path="/add" />
      <LoadableAll path="all" />
      <LoadableDelete path="delete" />
      <LoadableUpdate path="update" />
      <LoadableError404 default />
    </Router>
  </>
);

export default App;
