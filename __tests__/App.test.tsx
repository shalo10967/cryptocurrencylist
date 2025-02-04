import React from 'react';
import {render} from '@testing-library/react-native';
import App from '../App';

describe('<App />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    const {toJSON} = render(<App />);
    const tree = toJSON();
    expect(tree).toBeTruthy();
  });
});
