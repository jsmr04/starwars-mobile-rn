import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import componentReducer from '~redux/reducers/componentActions';

const reducer = combineReducers({
  component: componentReducer,
});

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
