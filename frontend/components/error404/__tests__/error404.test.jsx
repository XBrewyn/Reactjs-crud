import React from 'react';
import { create } from 'react-test-renderer';
import Error404 from '..';

describe('<Error404 />', () => {
  it('Renders correctly', () => {
    const component = create(<Error404 />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
