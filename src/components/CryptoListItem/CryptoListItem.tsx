import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {CryptoListItemProps} from './CryptoListItem.types';
import {styles} from './CryptoListItem.styles';
import {formatPricee} from '../../utils/formatters';

/**
* CryptoListItem Component
* @component
* @description Displays a touchable item showing cryptocurrency information including
* name, symbol, current price, and 24-hour price change percentage.

* @param {CryptoListItemProps} props - Component props
* @param {Cryptocurrency} props.item - Cryptocurrency data object
* @param {NavigationProp} props.navigation - Navigation object for screen transitions

*/
export const CryptoListItem: React.FC<CryptoListItemProps> = ({
  item,
  navigation,
}) => {
  //Handle navigation to the detail screen when item is pressed
  const handlePress = () => {
    navigation.navigate('Detail', {cryptoId: item.id});
  };

  return (
    <TouchableOpacity
      style={styles.cryptoItem}
      onPress={handlePress}
      accessible={true}
      accessibilityRole="button"
      accessibilityLabel={`View details for ${item.name}`}
      testID={`crypto-item-${item.id}`}>
      <View>
        {/* Cryptocurrency name and symbol */}
        <Text
          style={styles.cryptoName}
          accessibilityLabel={`${item.name} symbol ${item.symbol}`}>
          {item.name} ({item.symbol})
        </Text>

        {/* Current price */}
        <Text
          style={styles.cryptoPrice}
          accessibilityLabel={`Price ${formatPricee(item.price_usd)}`}>
          {formatPricee(item.price_usd)}
        </Text>

        {/* 24-hour price change */}
        <Text
          style={[
            styles.cryptoChange,
            parseFloat(item.percent_change_24h) > 0
              ? styles.positiveChange
              : styles.negativeChange,
          ]}
          accessibilityLabel={`24 hour change ${item.percent_change_24h} percent`}>
          {item.percent_change_24h}%
        </Text>
      </View>
    </TouchableOpacity>
  );
};
