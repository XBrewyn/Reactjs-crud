import { createStore, compose, applyMiddleware } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import reducer from './reducers';

const store = createStore(
  reducer,
  compose(applyMiddleware(thunk), devToolsEnhancer())
);

export default store;
