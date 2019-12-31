import React from 'react';
import { create } from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from '../navigation';

describe('<Navigation />', () => {
  it('renders correctly', () => {
    const tree = create(
      <Router>
        <Navigation />
      </Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
