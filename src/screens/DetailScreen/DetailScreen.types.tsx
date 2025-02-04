import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types';

export type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;
export type DetailScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Detail'
>;

export interface DetailScreenProps {
  route: DetailScreenRouteProp;
  navigation?: DetailScreenNavigationProp;
}
