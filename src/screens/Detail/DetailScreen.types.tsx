import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../types';

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;

export interface DetailScreenProps {
  route: DetailScreenRouteProp;
}
