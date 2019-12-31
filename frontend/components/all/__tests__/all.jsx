import React from 'react';
import { create } from 'react-test-renderer';
import All from '../all';

describe('<All />', () => {
  it('renders correctly', () => {
    const tree = create(<All />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
