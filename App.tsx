import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  SafeAreaView,
  Pressable,
} from 'react-native';
import {FlexBox} from './src/course/FlexBox';
import {MultipleChoiceQuestion} from './src/course/Project/MultipleChoiceQuestion';
import {Dulingo} from './src/course/Project/Dulingo';

const Box = (props: any) => {
  return (
    <Pressable
      onPress={() => {
        props.handleBox(props.number);
      }}
      style={{width: 100, height: 100, backgroundColor: 'green'}}>
      <Text style={{color: 'white', fontSize: 20}}>{props.number}</Text>
    </Pressable>
  );
};

function App(): JSX.Element {
  const name = 'Harry';

  const handleBox = (number: any) => {
    console.warn(number);
  };

  return (
    <>
      {/* <Text style={{fontSize: 30}}>Good morning {name}</Text> */}
      {/* <ScrollView>
        <View style={styles.box}>
          <Text style={styles.textColor}>box 1</Text>
        </View>

        <View style={{backgroundColor: 'red', width: 100, height: 100}}>
          <Text>last box</Text>
        </View>
        <Image source={require('./assets/images/coffee.png')} />
      </ScrollView> */}
      {/* <Text>Hello world</Text> */}
      {/* <FlexBox />; */}
      {/* <MultipleChoiceQuestion /> */}
      <Dulingo />
      {/* {[1, 2, 3, 4].map(x => {
        return <Box number={x} handleBox={handleBox} />;
      })} */}
    </>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'green',
    width: 100,
    height: 100,
  },
  textColor: {
    color: 'white',
  },
});

export default App;

// Topics:

/**
 * JSX, View
 * Resize mode in Image
 *  resizeMode ="cover" = it equally distributes image to view if aspect ration of container and image is different image may be cropped
 * resizeMode ="contain"  = it display every thing of image inside view
 * Network Image
 */
