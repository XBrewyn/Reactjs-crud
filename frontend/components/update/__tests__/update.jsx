import React from 'react';
import { create } from 'react-test-renderer';
import Update from '../update';

describe('<Update />', () => {
  it('Renders correctly', () => {
    const component = create(<Update />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
