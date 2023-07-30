import {View, Text, FlatList} from 'react-native';
import React from 'react';

const FlatListDemo = () => {
  // Sample data for the FlatList
  const data = [
    {id: '1', title: 'Item 1'},
    {id: '2', title: 'Item 2'},
    {id: '3', title: 'Item 3'},
    {id: '4', title: 'Item 4'},
    // Add more items here
  ];

  return (
    <FlatList
      style={{flex: 1, backgroundColor: 'yellow'}}
      data={data}
      keyExtractor={item => item.id}
      renderItem={({item}) => {
        return (
          <View style={{flex: 1, backgroundColor: 'red', margin: 10}}>
            <Text>{item.title}</Text>
          </View>
        );
      }}
    />
  );
};

export default FlatListDemo;
