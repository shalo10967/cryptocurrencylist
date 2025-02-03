import React from 'react';
import {render, waitFor, fireEvent, act} from '@testing-library/react-native';
import {HomeScreen} from '../../../src/screens/Home/HomeScreen';
import CryptoService from '../../../src/services/CryptoServices';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../src/types';

// Mock CryptoService
jest.mock('../../../src/services/CryptoServices');

describe('HomeScreen Component', () => {
  const mockNavigation: NativeStackNavigationProp<RootStackParamList, 'Home'> =
    {
      navigate: jest.fn(),
      dispatch: jest.fn(),
      setParams: jest.fn(),
      addListener: jest.fn(),
      removeListener: jest.fn(),
      canGoBack: jest.fn(),
      goBack: jest.fn(),
      getId: jest.fn(),
      getState: jest.fn(),
      setOptions: jest.fn(),
      route: {
        key: 'home-key',
        name: 'Home',
        params: undefined,
      },
    } as any;

  const mockCryptoData = [
    {
      id: 'bitcoin',
      symbol: 'BTC',
      name: 'Bitcoin',
      price_usd: '50000.00',
      percent_change_24h: '2.5',
      market_cap_usd: '1000000000',
    },
    {
      id: 'ethereum',
      symbol: 'ETH',
      name: 'Ethereum',
      price_usd: '3000.00',
      percent_change_24h: '-1.5',
      market_cap_usd: '500000000',
    },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
    (CryptoService.getCryptoList as jest.Mock).mockResolvedValue(
      mockCryptoData,
    );
  });

  it('shows loading indicator while fetching data', async () => {
    const {getByLabelText} = render(<HomeScreen navigation={mockNavigation} />);

    const loadingIndicator = getByLabelText('Loading cryptocurrencies');
    expect(loadingIndicator).toBeTruthy();
  });

  it('loads and displays cryptocurrencies', async () => {
    const {getByTestId, getByText, queryByLabelText} = render(
      <HomeScreen navigation={mockNavigation} />,
    );

    await act(async () => {
      await waitFor(() => {
        // Verify loading indicator is gone
        expect(queryByLabelText('Loading cryptocurrencies')).toBeNull();

        // Verify crypto list is rendered
        const cryptoList = getByTestId('crypto-list');
        expect(cryptoList).toBeTruthy();

        // Check if cryptocurrencies are rendered (by name)
        expect(getByText('Bitcoin')).toBeTruthy();
        expect(getByText('Ethereum')).toBeTruthy();
      });
    });
  });

  it('filters cryptocurrencies based on search input', async () => {
    const {getByPlaceholderText, queryByText} = render(
      <HomeScreen navigation={mockNavigation} />,
    );

    await act(async () => {
      await waitFor(() => {
        // Find search input
        const searchInput = getByPlaceholderText('Search Crtypos..');

        // Perform search
        fireEvent.changeText(searchInput, 'Bitcoin');

        // Verify only Bitcoin is displayed
        expect(queryByText('Bitcoin')).toBeTruthy();
        expect(queryByText('Ethereum')).toBeNull();
      });
    });
  });
});
