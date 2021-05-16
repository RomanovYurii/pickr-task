import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SafeAreaView, ScrollView, View} from 'react-native';

import Box from 'components/Box';
import Button from 'components/Button';

import {addNumbers} from 'actions/numbersActions';
import {RootReducer} from 'reducers/rootReducer';
import {NumbersState} from 'reducers/numbersReducer';

import displayLog from 'utils/displayLog';
import generateRandomDigitArray from 'utils/generateRandomDigitArray';

import styles from './Home.styles';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const log = useSelector<RootReducer, NumbersState['list']>(
    state => state.numbers.list,
  );

  const [numbers, setNumbers] = useState<number[]>(generateRandomDigitArray());

  const generateNumbers = (): void => {
    setNumbers(generateRandomDigitArray());
  };

  const onShowLog = (): void => {
    displayLog(log);
  };

  useEffect((): void => {
    dispatch(addNumbers(numbers));
  }, [dispatch, numbers]);

  return (
    <SafeAreaView>
      <ScrollView style={styles.root}>
        <View style={styles.boxesRow}>
          {numbers.map((n: number, idx: number) => (
            <Box key={idx} value={n} />
          ))}
        </View>
        <Button
          style={styles.button}
          onPress={generateNumbers}
          title={'Generate'}
        />
        <Button style={styles.button} onPress={onShowLog} title={'Show Log'} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
