import React from 'react';
import loadable from 'react-loadable';

export const LoadableNavigation = loadable({
  loader: () => import('../components/navigation'),
  loading() {
    return <span>loading split out code...</span>;
  },
});

export const LoadableAdd = loadable({
  loader: () => import('../components/add'),
  loading() {
    return <span>loading split out code...</span>;
  },
});

export const LoadableAll = loadable({
  loader: () => import('../components/all'),
  loading() {
    return <span>loading split out code...</span>;
  },
});

export const LoadableDelete = loadable({
  loader: () => import('../components/delete'),
  loading() {
    return <span>loading split out code...</span>;
  },
});

export const LoadableUpdate = loadable({
  loader: () => import('../components/update'),
  loading() {
    return <span>loading split out code...</span>;
  },
});

export const LoadableError404 = loadable({
  loader: () => import('../components/error404'),
  loading() {
    return <span>loading split out code...</span>;
  },
});
