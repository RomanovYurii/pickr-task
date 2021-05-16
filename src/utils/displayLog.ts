import {Alert} from 'react-native';

export default (log: number[][]): void => {
  Alert.alert(
    'Log',
    log.map((logEntry: number[]): string => logEntry.join()).join('\n'),
  );
};
