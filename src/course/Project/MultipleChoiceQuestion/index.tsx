import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import CupURi from '../../../../assets/images/cup.png';
import GalssUri from '../../../../assets/images/glass.png';

const ImageOption = (props: any) => {
  return (
    <View style={styles.optionContainer}>
      <Image
        style={styles.optionImage}
        source={props.image}
        resizeMode="contain"
      />
      <Text>{props.text}</Text>
    </View>
  );
};

export const MultipleChoiceQuestion = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>This is my first question</Text>
      <View style={styles.optionsContainer}>
        <ImageOption image={CupURi} text="Glass" />
        <ImageOption image={GalssUri} text="Cup" />
        <ImageOption image={CupURi} text="Cup" />
        <ImageOption image={GalssUri} text="Glass" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'stretch',
  },
  optionsContainer: {
    flexDirection: 'row',
    width: '100%',
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignContent: 'space-between',

    // this will work if we have flex wrap and we
    // want to add space to different direction
  },
  optionContainer: {
    borderWidth: 2,
    borderColor: 'lightgrey',
    borderRadius: 20,
    borderBottomWidth: 4,
    width: '48%',
    height: '48%',
    alignItems: 'center',
    padding: 10,
  },
  optionImage: {
    width: '100%',
    flex: 1,
  },
  optionText: {},
});
