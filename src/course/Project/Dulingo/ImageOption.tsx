import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import PropTypes from 'prop-types';

export const ImageOption = (props: any) => {
  console.log(props);
  return (
    <View style={styles.optionContainer}>
      <Image
        resizeMode="contain"
        source={props.image}
        style={styles.optionImage}
      />
      <Text>{props.name}</Text>
    </View>
  );
};

ImageOption.propTypes = {
  name: PropTypes.string,
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  optionsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'space-between',
    justifyContent: 'space-between',
    padding: 10,
  },
  optionContainer: {
    borderWidth: 2,
    width: '48%',
    height: '48%',
    borderColor: 'lightgrey',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionImage: {
    width: '100%',
    flex: 1,
  },
});
