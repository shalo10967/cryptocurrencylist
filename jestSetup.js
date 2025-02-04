/* eslint-disable no-undef */
global.__DEV__ = true;

// Mock para BatchedBridge
global.__fbBatchedBridgeConfig = {
  remoteModuleConfig: [],
  localModulesConfig: [],
};

// Mock para React Native
jest.mock('react-native', () => {
  const RN = jest.requireActual('react-native');
  return {
    Platform: {
      OS: 'ios',
      select: jest.fn(obj => obj.ios),
    },
    NativeModules: {
      ...RN.NativeModules,
      PlatformConstants: {
        OS: 'ios',
        isTesting: true,
      },
      StatusBarManager: {getHeight: jest.fn()},
    },
    StyleSheet: {
      create: jest.fn(styles => styles),
      flatten: jest.fn(),
    },
    View: 'View',
    Text: 'Text',
    TouchableOpacity: 'TouchableOpacity',
  };
});

// Mock para React Navigation
jest.mock('@react-navigation/native', () => ({
  NavigationContainer: ({children}) => children,
  useNavigation: () => ({
    navigate: jest.fn(),
    goBack: jest.fn(),
  }),
  useRoute: () => ({
    params: {},
  }),
}));

// Mock para Native Stack
jest.mock('@react-navigation/native-stack', () => ({
  createNativeStackNavigator: () => ({
    Navigator: ({children}) => children,
    Screen: ({name, options}) => options?.title || name,
  }),
}));

// Mock básico para Reanimated
jest.mock('react-native-reanimated', () => ({
  default: {
    addWhitelistedNativeProps: {},
    createAnimatedComponent: jest.fn(),
  },
  useAnimatedStyle: () => ({}),
  useSharedValue: jest.fn(),
  withTiming: jest.fn(),
}));
