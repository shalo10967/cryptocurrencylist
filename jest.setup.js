// jest.setup.js
import 'react-native';
import '@testing-library/jest-native/extend-expect';

// Optionally mock any global dependencies
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
    goBack: jest.fn(),
  }),
  NavigationContainer: ({ children }: any) => children,
}));