import React from 'react';
import { create } from 'react-test-renderer';
import Navigation from '../navigation';

describe('<Navigation />', () => {
  it('renders correctly', () => {
    const tree = create(<Navigation />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
