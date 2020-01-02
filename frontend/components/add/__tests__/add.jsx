import React from 'react';
import { create } from 'react-test-renderer';
import Add from '..';

describe('<Add />', () => {
  it('Renders correctly', () => {
    const component = create(<Add />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
