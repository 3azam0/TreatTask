import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {treatsSlice} from './treats';
import {combineReducers} from 'redux';
import {createTransform, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import reactotron from '../Services/debugger';

//
const reactotronEnhancer = reactotron.createEnhancer();
const customizedMiddleware = getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  });
export const hasPrefix = (action, prefix) => action.type.startsWith(prefix);
export const isPending = action => action.type.endsWith('/pending');
export const isFulfilled = action => action.type.endsWith('/fulfilled');
export const isRejected = action => action.type.endsWith('/rejected');
export const isPendingAction = prefix => action => {
  return hasPrefix(action, prefix) && isPending(action);
};
export const isRejectedAction = prefix => action => {
  return hasPrefix(action, prefix) && isRejected(action);
};
export const isFulfilledAction = prefix => action => {
  return hasPrefix(action, prefix) && isFulfilled(action);
};

const reducers = combineReducers({
  treats: treatsSlice.reducer,
});

const handleLoaders = createTransform(
  null,
  (state, key) => {
    const newState = {...state};
    Object.keys(newState?.loaders || {}).forEach(
      i => (newState.loaders[i] = false),
    );
    return newState;
  },
  {
    // whitelist: ['user'],
  },
);

const userHandler = createTransform(
  null,
  (state, key) => {
    const newState = {...state};
    return newState;
  },
  {
    // whitelist: ['user']
  },
);

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
  transforms: [handleLoaders, userHandler],
  whitelist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  enhancers: getDefaultEnhancers => {
    return getDefaultEnhancers().concat(reactotronEnhancer);
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: customizedMiddleware,
});

export default store;
