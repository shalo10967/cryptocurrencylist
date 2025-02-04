import React, {useEffect, useState} from 'react';
import {View, FlatList, TextInput, ActivityIndicator} from 'react-native';
import {Cryptocurrency} from '../../types';
import {styles} from './HomeScreen.styles';
import {HomeScreenProps} from './HomeScreen.types';
import CryptoService from '../../services/CryptoServices';
import {CryptoListItem} from '../../components';

export const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const [cryptosList, setCryptoList] = useState<Cryptocurrency[]>([]);
  const [filteredListCryptos, setFilteredListCryptos] = useState<
    Cryptocurrency[]
  >([]);
  const [searchCryptoText, setSearchCryptoText] = useState('');
  const [loading, setLoading] = useState(true);

  //Loads cryptocurrency data on component mount

  useEffect(() => {
    loadCryptos();
  }, []);

  //Fetches cryptocurrency data from the API

  const loadCryptos = async () => {
    try {
      const data = await CryptoService.getCryptoList();
      setCryptoList(data);
      setFilteredListCryptos(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  //Filters cryptocurrency list
  const handleSearch = (query: string) => {
    setSearchCryptoText(query);
    const filtered = cryptosList.filter(
      crypto =>
        crypto.name.toLowerCase().includes(query.toLowerCase()) ||
        crypto.symbol.toLowerCase().includes(query.toLowerCase()),
    );
    setFilteredListCryptos(filtered);
  };
  //Renders individual cryptocurrency list items
  const renderItem = ({item}: {item: Cryptocurrency}) => (
    <View testID="crypto-list-item">
      <CryptoListItem item={item} navigation={navigation} />
    </View>
  );

  // Loading state
  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator
          testID="loading-indicator"
          size="large"
          accessibilityLabel="Loading cryptocurrencies"
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TextInput
        testID="search-input"
        style={styles.searchInput}
        placeholder="Search Crtypos.."
        value={searchCryptoText}
        onChangeText={handleSearch}
        accessibilityLabel="Search Crtypos.."
        accessibilityHint="Enter name or symbol to filter the list"
      />
      <FlatList
        data={filteredListCryptos}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.list}
        accessibilityLabel="Cryptocurrencies list"
        testID="crypto-list"
      />
    </View>
  );
};
