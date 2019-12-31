import React from 'react';
import { create } from 'react-test-renderer';
import Homepage from '../add';

describe('<Add />', () => {
  it('Renders correctly', () => {
    const component = create(<Homepage />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
