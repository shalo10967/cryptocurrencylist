import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  cryptoItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  cryptoName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cryptoPrice: {
    fontSize: 14,
    color: '#666',
    fontWeight: 'bold',
    marginTop: 4,
  },
  cryptoChange: {
    fontSize: 14,
    marginTop: 4,
  },
  positiveChange: {
    color: '#4caf50',
  },
  negativeChange: {
    color: '#f44336',
  },
});
