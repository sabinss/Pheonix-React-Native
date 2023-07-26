import React from 'react';
import {Text, View} from 'react-native';

export const Splash = ({navigation}: any) => {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Main');
    }, 5000);
  }, []);
  return (
    <View>
      <Text>Splash screen</Text>
    </View>
  );
};
