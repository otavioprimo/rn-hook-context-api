import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

import CounterDisplay from './components/counterDisplay';

export default App = ({navigation}) => {
  return (
    <>
      <CounterDisplay />
      <TouchableOpacity
        style={styles.buttonVisualize}
        onPress={() => navigation.navigate('VisualizeCounter')}>
        <Text style={styles.textVisualize}>Visualize</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  textVisualize: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  buttonVisualize: {
    backgroundColor: 'blue',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
  },
});
