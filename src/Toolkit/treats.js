import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {isFulfilledAction, isPendingAction, isRejectedAction} from '.';
import {API} from '../services/api';
import {handelError} from '../services/handleErrors';
import {getCursor} from '../services/utils';

const initialState = {
  treat: {
    step: 1,
    base: '',
    baseSelected: false,
    firstTopping: '',
    firsToppingSelected: false,
    secondTopping: '',
    secondToppingSelected: false,
    coating: '',
    coatingSelected: false,
    toppings: [],
  },

  loaders: {},
};
export const treatsSlice = createSlice({
  name: 'treats',
  initialState,
  reducers: {
    handleStep: (state, action) => {
      if (action.payload == 'next' && state.treat.step < 3) {
        state.treat.step = state.treat.step + 1;
      } else if (action.payload == 'back' && state.treat.step == 2) {
        state.treat.coatingSelected = false;
        state.treat.coating = '';
        state.treat.step = state.treat.step - 1;
      } else if (action.payload == 'back' && state.treat.step == 3) {
        state.treat.toppings = [];
        state.treat.step = 2;
      } else if (action.payload == 'back' && state.treat.step == 1) {
      }
    },
    cancelTreat: state => {
      Object.assign(state, initialState);
    },
    addRemoveBase: (state, action) => {
      if (
        state.treat.baseSelected === true &&
        state.treat.base === action.payload
      ) {
        state.treat.base = '';
        state.treat.baseSelected = false;
        state.treat.step = 1;
      } else {
        state.treat.base = action.payload;
        state.treat.baseSelected = true;
      }
    },
    addRemoveCoating: (state, action) => {
      if (
        state.treat.coatingSelected === true &&
        state.treat.coating === action.payload
      ) {
        state.treat.coating = '';
        state.treat.coatingSelected = false;
      } else {
        state.treat.coating = action.payload;
        state.treat.coatingSelected = true;
      }
    },
    addRemoveTopping: (state, action) => {
      if (state.treat.toppings.length === 0) {
        state.treat.toppings.push(action.payload);
      } else if (state.treat.toppings.length === 1) {
        if (state.treat.toppings[0] === action.payload) {
          state.treat.toppings.pop();
        } else {
          state.treat.toppings.push(action.payload);
        }
      } else if (state.treat.toppings.length === 2) {
        let index = state.treat.toppings.indexOf(action.payload);
        if (index !== -1) {
          state.treat.toppings.splice(index, 1);
        } else {
        }
      }
    },
  },
  extraReducers: builder => {},
});
export const {
  addRemoveBase,
  cancelTreat,
  addRemoveTopping,
  addRemoveCoating,
  handleStep,
} = treatsSlice.actions;

export default treatsSlice.reducer;
