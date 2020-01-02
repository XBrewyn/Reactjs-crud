import React from 'react';
import { create } from 'react-test-renderer';
import Update from '..';

describe('<Update />', () => {
  it('Renders correctly', () => {
    const component = create(<Update />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
