import React, {useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Button,
  Alert,
} from 'react-native';
import question from './../../../../assets/data/imageMultipleQuestion';

const CustomText = (props: any) => {
  return <Text style={styles.textStyle}>{props.name}</Text>;
};

const ImageOption = (props: any) => {
  const {name, isSelected = false, image, handlePress, index} = props;
  return (
    <Pressable
      key={index}
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

const CustomButton = ({text, onPress, disabled}: any) => {
  return (
    <Pressable
      style={[styles.btnContainer, disabled ? styles.disableContainer : {}]}
      onPress={onPress}>
      <Text style={styles.btnText}>{text}</Text>
    </Pressable>
  );
};

// useState, useEffect ,props

export const Dulingo = () => {
  const [selectedOption, setSelectedOption] = useState<any>(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedQuestion, setSelectedQuestion] = useState(
    question[questionIndex],
  );

  const handlePress = (option: any) => {
    console.log(option);
    setSelectedOption(option);
  };
  return (
    <View style={styles.root}>
      <CustomText name={selectedQuestion.question} />
      <View style={styles.optionsContainer}>
        {selectedQuestion.options.map((option, index) => {
          return (
            <ImageOption
              index={index}
              name={option.text}
              image={option.image}
              handlePress={() => handlePress(option)}
              isSelected={option.id === selectedOption?.id}
            />
          );
        })}
        {/* {question.options.map(option => {
          return <ImageOption name={option.text} />;
        })} */}
      </View>
      <CustomButton
        text="Press Me"
        onPress={() => {
          console.warn('press me', selectedOption.correct);
          if (selectedOption.correct) {
            setQuestionIndex(prev => prev + 1);
            if (questionIndex >= question.length) {
              console.log('score');
              Alert.alert('you won');
            } else {
              setSelectedQuestion(question[questionIndex]);
            }
          }
        }}
        disabled={!selectedOption}
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
  btnContainer: {
    backgroundColor: '#58CC02',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 10,
    borderBottomWidth: 4,
    borderColor: '#57A600',
  },
  btnText: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  disableContainer: {
    backgroundColor: 'lightgrey',
  },
});
