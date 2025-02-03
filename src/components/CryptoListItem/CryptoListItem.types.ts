import {Cryptocurrency} from '../../types';
import {NavigationProp} from '@react-navigation/native';

export interface CryptoListItemProps {
  item: Cryptocurrency;
  navigation: NavigationProp<any>;
}
