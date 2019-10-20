import React from 'react';
import {View, Text, FlatList} from 'react-native';

import {useHistoricContext} from '../../context/historic';

export default function VisualizeCounter() {
  const {historic} = useHistoricContext();

  function renderItem({item}) {
    return (
      <Text key={String(item.id)} style={{textAlign: 'center'}}>
       counted {item.label} at {item.timestamp.toISOString(0)}
      </Text>
    );
  }

  return (
    <View>
      <FlatList
        data={historic}
        renderItem={renderItem}
        keyExtractor={item => String(item.id)}
      />
    </View>
  );
}
