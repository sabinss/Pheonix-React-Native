import React, {useState} from 'react';

import {View, Text, StyleSheet, Image, Pressable, Alert} from 'react-native';
import questions from './../../../../assets/data/imageMultipleChoiceQuestion';

const CustomText = (props: any) => {
  return <Text style={styles.textStyle}>{props.name}</Text>;
};

const ImageOption = (props: any) => {
  const {name, id, isSelected = false, image, handlePress} = props;
  return (
    <Pressable
      key={id}
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

const CustomButton = ({title, onPress, disable}: any) => {
  return (
    <Pressable
      disabled={disable}
      onPress={onPress}
      style={{
        backgroundColor: disable ? 'grey' : 'green',
        padding: 15,
        borderRadius: 10,
        margin: 10,
      }}>
      <Text
        style={{
          color: 'white',
          textAlign: 'center',
          fontSize: 22,
          fontWeight: 'bold',
        }}>
        {title}
      </Text>
    </Pressable>
  );
};

const ProgressBar = ({progress}: any) => {
  return (
    <View
      style={{
        backgroundColor: 'lightgrey',
        height: 40,
        width: '100%',
        borderRadius: 20,
      }}>
      <View
        style={{
          width: `${progress * 100}%`,
          backgroundColor: '#FAC800',
          height: 40,
          borderRadius: 20,
        }}
      />
    </View>
  );
};

// useState, useEffect ,props

export const Dulingo = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<any>(null);

  const handlePress = (option: any) => {
    setSelectedOption(option);
  };
  return (
    <View style={styles.root}>
      <View>
        <ProgressBar progress={questionIndex / questions.length} />
      </View>
      <CustomText name={questions[questionIndex].question} />
      <View style={styles.optionsContainer}>
        {questions[questionIndex].options.map(option => {
          return (
            <ImageOption
              id={option.id}
              name={option.text}
              image={option.image}
              isSelected={selectedOption?.id == option.id}
              handlePress={() => handlePress(option)}
            />
          );
        })}
        {/* {question.options.map(option => {
          return <ImageOption name={option.text} />;
        })} */}
      </View>
      <CustomButton
        title="Check"
        disable={selectedOption == null}
        onPress={() => {
          const index = questionIndex + 1;
          if (index >= questions.length) {
            // setQuestionIndex(() => index);
            setQuestionIndex(0);
            Alert.alert('Game over');
          } else {
            setQuestionIndex(index);
          }
        }}
      />
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
