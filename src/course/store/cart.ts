import {createSlice, createSelector} from '@reduxjs/toolkit';
import store from './configureStore';

interface IInitialState {
  count: number;
}

const initialState: IInitialState = {
  count: 0,
};

const slice = createSlice({
  name: 'cartState',
  initialState,
  reducers: {
    addCartItem: (cartState: IInitialState, action?: any): any =>
      (cartState.count += 1),
    decreaseCartItem: (cartState: IInitialState, action: any) => {
      if (cartState.count > 0) cartState.count -= action.payload;
    },
  },
});

type RootState = ReturnType<typeof store.getState>;
const selectCounterState = (state: RootState) => state.count;

createSelector([selectCounterState], counterState => counterState);

// store, actions, reducer
export const {addCartItem, decreaseCartItem} = slice.actions;
export default slice.reducer;

9849215262
