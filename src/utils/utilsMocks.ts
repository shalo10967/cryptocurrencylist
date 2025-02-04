import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../src/types';
import {NavigationState} from '@react-navigation/native';

export const createMockNavigation = (): NativeStackNavigationProp<
  RootStackParamList,
  'Home'
> => {
  const mockNavigation = {
    navigate: jest.fn(),

    push: jest.fn(),
    pop: jest.fn(),
    popToTop: jest.fn(),
    replace: jest.fn(),

    goBack: jest.fn(),

    setOptions: jest.fn(),
    setParams: jest.fn(),

    addListener: jest.fn(),
    removeListener: jest.fn(),
    dispatch: jest.fn(),

    navigateDeprecated: jest.fn(),
    preload: jest.fn(),
    reset: jest.fn(),
    isFocused: jest.fn().mockReturnValue(true),
    canGoBack: jest.fn().mockReturnValue(true),

    getId: jest.fn(),
    getState: jest.fn(() => ({} as NavigationState)),

    dangerouslyGetState: jest.fn(() => ({} as NavigationState)),

    route: {
      key: 'home-key',
      name: 'Home',
      params: undefined,
    },
  } as unknown as NativeStackNavigationProp<RootStackParamList, 'Home'>;

  return mockNavigation;
};

export const mockNavigation = createMockNavigation();
