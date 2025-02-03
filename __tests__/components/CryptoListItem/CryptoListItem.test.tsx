import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { CryptoListItem } from '../../../src/components/CryptoListItem/CryptoListItem';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../src/types';

describe('CryptoListItem Component', () => {
  const mockNavigation: NativeStackNavigationProp<RootStackParamList, 'Home'> = {
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

  const mockCryptoItem = {
    id: 'bitcoin',
    symbol: 'BTC',
    name: 'Bitcoin',
    price_usd: '50000.00',
    percent_change_24h: '2.5',
    market_cap_usd: '1000000000',
  };

  it('renders cryptocurrency item correctly', () => {
    const { getByText, getByTestId } = render(
      <CryptoListItem 
        item={mockCryptoItem} 
        navigation={mockNavigation} 
      />
    );

    expect(getByText('Bitcoin (BTC)')).toBeTruthy();
    expect(getByText('$50000.00')).toBeTruthy();
    expect(getByText('2.5%')).toBeTruthy();
    expect(getByTestId('crypto-item-bitcoin')).toBeTruthy();
  });

  it('handles navigation on press', () => {
    const { getByTestId } = render(
      <CryptoListItem 
        item={mockCryptoItem} 
        navigation={mockNavigation} 
      />
    );

    const cryptoItem = getByTestId('crypto-item-bitcoin');
    fireEvent.press(cryptoItem);

    expect(mockNavigation.navigate).toHaveBeenCalledWith('Detail', {
      cryptoId: 'bitcoin'
    });
  });
});