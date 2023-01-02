import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App';
jest.setTimeout(15000);
describe('<App />', () => {
 it('renders correctly', () => {
  const tree = renderer.create(<App/>).toJSON();
  expect(tree).toMatchSnapshot();
});
});