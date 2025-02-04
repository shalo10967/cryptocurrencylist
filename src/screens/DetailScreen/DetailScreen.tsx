import React, {useEffect, useState, useCallback} from 'react';
import {View, Text, ScrollView, ActivityIndicator} from 'react-native';
import {Cryptocurrency} from '../../types';
import {styles} from './DetailScreen.styles';
import {DetailScreenProps} from './DetailScreen.types';
import CryptoService from '../../services/CryptoServices';

const DetailScreen: React.FC<DetailScreenProps> = ({route}) => {
  // Extract cryptocurrency ID from route params
  const {cryptoId} = route.params;

  const [crypto, setCrypto] = useState<Cryptocurrency | null>(null);
  const [loading, setLoading] = useState(true);

  //Fetch detailed cryptocurrency data
  const loadCryptoDetail = useCallback(async () => {
    try {
      const data = await CryptoService.getCryptoDetail(cryptoId);
      setCrypto(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [cryptoId]);

  useEffect(() => {
    loadCryptoDetail();
  }, [loadCryptoDetail]);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator
          testID="loading-indicator"
          size="large"
          accessibilityLabel="Loading cryptocurrency details"
        />
      </View>
    );
  }

  if (!crypto) {
    return (
      <View style={styles.centered}>
        <Text
          accessibilityLabel="No cryptocurrency data available"
          testID="error-message">
          No data available
        </Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      accessibilityLabel={`Details for ${crypto.name}`}>
      <View style={styles.card}>
        {/* Cryptocurrency name and symbol */}
        <Text style={styles.title}>
          {crypto.name} ({crypto.symbol})
        </Text>

        {/* Price information */}
        <View style={styles.infoRow}>
          <Text style={styles.label}>Price USD:</Text>
          <Text
            style={styles.value}
            accessibilityLabel={`Price ${parseFloat(crypto.price_usd).toFixed(
              2,
            )} USD`}>
            ${parseFloat(crypto.price_usd).toFixed(2)}
          </Text>
        </View>

        {/* 24-hour change */}
        <View style={styles.infoRow}>
          <Text style={styles.label}>24h Change:</Text>
          <Text
            testID="price-change"
            style={[
              styles.value,
              parseFloat(crypto.percent_change_24h) > 0
                ? styles.positiveChange
                : styles.negativeChange,
            ]}
            accessibilityLabel={`24 hour change ${crypto.percent_change_24h} percent`}>
            {crypto.percent_change_24h}%
          </Text>
        </View>

        {/* Market capitalization */}
        <View style={styles.infoRow}>
          <Text style={styles.label}>Market Cap:</Text>
          <Text
            style={styles.value}
            accessibilityLabel={`Market cap ${parseFloat(
              crypto.market_cap_usd,
            ).toLocaleString()} USD`}>
            ${parseFloat(crypto.market_cap_usd).toLocaleString()}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
export default DetailScreen;
