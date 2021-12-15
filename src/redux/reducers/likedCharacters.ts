import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import {LikedCharacters} from "~types/LikedCharacter";

type Character = {
  currentCharacter?: LikedCharacters,
}

// Default
const initialState:Character = {
  currentCharacter: {id: '', name: ''}
}

//Slice
const LikedCharacterSlice = createSlice({
  name: 'likedCharacter',
  initialState,
  reducers: {
    setCurrentCharacterId: (state, action: PayloadAction<Character>) => {
      state.currentCharacter = action.payload.currentCharacter
  },

  },
});

//Actions
export const {setCurrentCharacterId} = LikedCharacterSlice.actions

//Reducer
export default LikedCharacterSlice.reducer
