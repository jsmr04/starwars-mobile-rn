import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import componentReducer from '~redux/reducers/componentActions';
import likedCharacters from '~redux/reducers/likedCharacters';

const reducers = combineReducers({
  component: componentReducer,
  likedCharacter: likedCharacters
});

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
