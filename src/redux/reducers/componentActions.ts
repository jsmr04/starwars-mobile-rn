import {PayloadAction, createSlice} from "@reduxjs/toolkit";

type ComponentActions = {
  episodesSortingMode: 'asc' | 'desc'
}
// Default
const initialState: ComponentActions  = {
  episodesSortingMode: 'asc'
};

//Slice
const componentActionsSlice = createSlice({
  name: 'componentActions',
  initialState,
  reducers: {
    sortEpisodes: (state, action: PayloadAction<ComponentActions>) => {
        state.episodesSortingMode = action.payload.episodesSortingMode
    },
  },
});

//Actions
export const {sortEpisodes} = componentActionsSlice.actions

//Reducer
export default componentActionsSlice.reducer
