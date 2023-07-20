import React, {useState} from 'react';

import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import question from './../../../../assets/data/oneQuestionWithOption';

const CustomText = (props: any) => {
  return <Text style={styles.textStyle}>{props.name}</Text>;
};

const ImageOption = (props: any) => {
  const {name, isSelected = false, image, onPress} = props;
  return (
    <Pressable
      onPress={() => {
        onPress();
      }}
      style={[
        styles.optionContainer,
        isSelected ? styles.selectedContainer : {},
      ]}>
      <Image resizeMode="contain" style={styles.image} source={{uri: image}} />
      <Text style={isSelected ? styles.selectedText : {}}>{name}</Text>
    </Pressable>
  );
};

export const Dulingo = () => {
  const [selected, setSelected] = useState(null);
  return (
    <View style={styles.root}>
      <CustomText name="Which one is the Glass ?" />
      <View style={styles.optionsContainer}>
        {question.options.map(option => {
          return (
            <ImageOption
              name={option.text}
              image={option.image}
              isSelected={option.id == selected?.id}
              onPress={() => {
                console.warn(option.id);
                setSelected(option);
              }}
            />
          );
        })}
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
  selectedContainer: {
    backgroundColor: '#81D5fe',
  },
  selectedText: {
    color: '#40BEF7',
    fontWeight: 'bold',
  },
});
