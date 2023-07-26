import {View, Text, Pressable} from 'react-native';
import React from 'react';

const Screen3 = ({navigation}: any) => {
  return (
    <View style={{flex: 1, backgroundColor: 'green'}}>
      <Text>Screen3</Text>
      <Pressable onPress={() => navigation.openDrawer()}>
        <Text>Open Drawer</Text>
      </Pressable>
    </View>
  );
};

export default Screen3;
