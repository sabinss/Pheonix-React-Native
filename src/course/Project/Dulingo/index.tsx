import React from 'react';

import {View, Text, StyleSheet, Image} from 'react-native';
import {javascript} from 'webpack';

const CustomText = (props: any) => {
  return <Text style={styles.textStyle}>{props.name}</Text>;
};

const ImageOption = (props: any) => {
  const {name, description} = props;
  return (
    <View style={styles.optionContainer}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require('../../../../assets/images/cup.png')}
      />
      <Text>{name}</Text>
      <Text>{description}</Text>
    </View>
  );
};

export const Dulingo = () => {
  return (
    <View style={styles.root}>
      <CustomText name="Which one is the Glass ?" />
      <View style={styles.optionsContainer}>
        <ImageOption name="Cup" description="cup description" />
        <ImageOption name="glass" description="glass description" />
        <ImageOption name="heart" description="heart description" />
        <ImageOption name="milk" description="milk description" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 10,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignContent: 'space-between',
    flex: 1,
  },
  optionContainer: {
    borderWidth: 2,
    width: '48%',
    height: '48%',
    borderColor: 'lightgrey',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    flex: 1,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
