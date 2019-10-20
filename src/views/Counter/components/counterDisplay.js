import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {useCounterContext} from '../../../context/counter';
import CounterButtons from './counterButtons';

export default function CounterDisplay() {
  const {count} = useCounterContext();

  return (
    <View style={styles.container}>
      <Text>{count}</Text>
      <CounterButtons />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
});