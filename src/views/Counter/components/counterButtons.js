import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

import {useCounterContext} from '../../../context/counter';
import {useHistoricContext} from '../../../context/historic';

export default function CounterButtons() {
  const {increment, decrement} = useCounterContext();
  const {addToHistoric} = useHistoricContext();

  function incrementCount() {
    increment();
    addToHistoric('+ 1');
  }

  function decrementCount() {
    decrement();
    addToHistoric('- 1');
  }

  return (
    <>
      <TouchableOpacity style={styles.buttonCounter} onPress={incrementCount}>
        <Text style={styles.textCounter}>Count +</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonCounter} onPress={decrementCount}>
        <Text style={styles.textCounter}>Counter -</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  buttonCounter: {
    height: 45,
    backgroundColor: 'purple',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  textCounter: {
    color: '#fff',
  },
});
