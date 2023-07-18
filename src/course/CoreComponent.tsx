import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';

import RNImage from '../../assets/download.png';
export const CoreComponent = () => {
  const name = 'John';

  return (
    // <ScrollView>
    <View style={{height: 100, width: 100}}>
      {/* numberOfLines={2} */}
      <Text style={{color: 'black'}}>
        Good morning {name} <Text></Text>
      </Text>
      {/* <Image
          source={RNImage}
          style={{width: '100%', marginTop: 10, height: 200}}
          resizeMode="contain"
        /> */}
      <Image
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDcPuqnigejRsHaePtBj8m9ZOYSMZ0vbSrO8fIaEnj1D18_5h5HwXmbYF3GU1PKaWbijA&usqp=CAU',
        }}
        style={{width: '100%', marginTop: 10, height: 200}}
        resizeMode="contain"
      />
      <TextInput placeholder="What is your name" style={{width: 200}} />
    </View>
    // </ScrollView>
  );
};
