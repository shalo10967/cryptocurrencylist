import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchInput: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  list: {
    flex: 1,
  },
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
