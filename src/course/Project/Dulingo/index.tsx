import React, {useState} from 'react';

import {View, Text, StyleSheet, Image, Pressable, Alert} from 'react-native';
import questions from './../../../../assets/data/imageMultipleChoiceQuestion';

const CustomText = (props: any) => {
  return <Text style={styles.textStyle}>{props.name}</Text>;
};

const ImageOption = (props: any) => {
  const {name, isSelected = false, image, handlePress} = props;
  return (
    <Pressable
      onPress={() => {
        handlePress(name);
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

// useState, useEffect ,props

export const Dulingo = () => {
  const [questionIndex, setCurrentIndex] = useState(1);
  const [selectedOption, setSelectedOption] = useState<any>(null);

  const handlePress = (name: string) => {
    console.warn(name);
  };
  return (
    <View style={styles.root}>
      <CustomText name={questions[questionIndex].question} />
      <View style={styles.optionsContainer}>
        {questions[questionIndex].options.map(option => {
          return (
            <ImageOption
              name={option.text}
              image={option.image}
              handlePress={() => {
                setSelectedOption(option);
              }}
              isSelected={option.id === selectedOption?.id}
            />
          );
        })}
        {/* {question.options.map(option => {
          return <ImageOption name={option.text} />;
        })} */}
      </View>

      <Pressable
        disabled={selectedOption == null}
        onPress={() => {
          setCurrentIndex(questionIndex + 1);
          questionIndex + 1;
        }}
        style={{
          backgroundColor: selectedOption == null ? 'grey' : 'green',
          padding: 10,
          marginTop: 10,
          borderRadius: 20,
        }}>
        <Text style={{color: 'white', textAlign: 'center', fontSize: 23}}>
          Check
        </Text>
      </Pressable>
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
