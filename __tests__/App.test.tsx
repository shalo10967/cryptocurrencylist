import React from 'react';
import {render} from '@testing-library/react-native';
import App from '../App';

// Mock NavigationContainer
jest.mock('@react-navigation/native', () => ({
  NavigationContainer: jest.fn(({children}) => children),
}));

// Mock screens
jest.mock('../src/screens', () => ({
  HomeScreen: () => null,
  DetailScreen: () => null,
}));

describe('App Component', () => {
  it('renders navigation structure', () => {
    const {toJSON} = render(<App />);
    expect(toJSON()).toMatchSnapshot();
  });
});
