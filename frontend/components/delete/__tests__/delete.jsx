import React from 'react';
import { create } from 'react-test-renderer';
import Homepage from '..';

describe('<Delete />', () => {
  it('Renders correctly', () => {
    const component = create(<Homepage />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
