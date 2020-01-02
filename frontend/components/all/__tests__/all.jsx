import React from 'react';
import { create } from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../../redux/store';
import All from '../all';

describe('<All />', () => {
  it('renders correctly', () => {
    const tree = create(
      <Provider store={store}>
        <All />
      </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
