import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {CryptoListItem} from '../../../src/components/CryptoListItem/CryptoListItem';
import {NavigationProp} from '@react-navigation/native';

const mockNavigate = jest.fn();

const mockCrypto = {
  id: 'bitcoin',
  name: 'Bitcoin',
  symbol: 'BTC',
  price_usd: '45000.12 USD',
  percent_change_24h: '5.23',
  market_cap_usd: '1000000000000',
};

const mockCryptoNegative = {
  ...mockCrypto,
  percent_change_24h: '-2.5',
};

const mockNavigation = {
  navigate: mockNavigate,
} as unknown as NavigationProp<any>;

describe('CryptoListItem', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with positive change', () => {
    const {getByText, getByTestId} = render(
      <CryptoListItem item={mockCrypto} navigation={mockNavigation} />,
    );
    expect(getByText('Bitcoin (BTC)')).toBeTruthy();
    expect(getByText('$45,000.12 USD')).toBeTruthy();
    expect(getByText('5.23%')).toBeTruthy();
    expect(getByTestId('crypto-item-bitcoin')).toBeTruthy();
  });

  it('renders correctly with negative change', () => {
    const {getByText} = render(
      <CryptoListItem item={mockCryptoNegative} navigation={mockNavigation} />,
    );

    expect(getByText('-2.5%')).toBeTruthy();
  });

  it('navigates to detail screen when pressed', () => {
    const {getByTestId} = render(
      <CryptoListItem item={mockCrypto} navigation={mockNavigation} />,
    );

    fireEvent.press(getByTestId('crypto-item-bitcoin'));
    expect(mockNavigate).toHaveBeenCalledWith('Detail', {
      cryptoId: 'bitcoin',
    });
  });

  it('has correct accessibility props', () => {
    const {getByTestId} = render(
      <CryptoListItem item={mockCrypto} navigation={mockNavigation} />,
    );

    const cryptoItem = getByTestId('crypto-item-bitcoin');
    expect(cryptoItem.props.accessible).toBe(true);
    expect(cryptoItem.props.accessibilityLabel).toBe(
      'View details for Bitcoin',
    );
    expect(cryptoItem.props.accessibilityRole).toBe('button');
  });

  it('applies correct style for positive price change', () => {
    const {getByText} = render(
      <CryptoListItem item={mockCrypto} navigation={mockNavigation} />,
    );

    const changeText = getByText('5.23%');
    expect(changeText.props.style).toContainEqual(
      expect.objectContaining({color: expect.any(String)}),
    );
  });

  it('applies correct style for negative price change', () => {
    const {getByText} = render(
      <CryptoListItem item={mockCryptoNegative} navigation={mockNavigation} />,
    );

    const changeText = getByText('-2.5%');
    expect(changeText.props.style).toContainEqual(
      expect.objectContaining({color: expect.any(String)}),
    );
  });
});
