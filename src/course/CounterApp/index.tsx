import {View, Text, Button} from 'react-native';
import React from 'react';
import store from '../store/configureStore';
import {addCartItem} from '../store/cart';
import {useDispatch} from 'react-redux';

const Counter = () => {
  const {count} = store.getState();
  const dispatch = useDispatch();
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text style={{textAlign: 'center', fontSize: 30}}>Counter {count}</Text>
      <Button
        title="Increment"
        onPress={() => {
          dispatch(addCartItem({count: 1}));
        }}
      />
      <Button title="Decrement" onPress={() => {}} />
    </View>
  );
};

export default Counter;
