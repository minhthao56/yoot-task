import { createSlice } from '@reduxjs/toolkit';

type TTnitialState = {
  isOpen: boolean;
};

const initialState = {
  isOpen: false,
} as TTnitialState;

export const demoSlice = createSlice({
    name: 'demo',
    initialState: initialState,
    reducers: {
      doOpenModal(state) {
        state.isOpen = true;
      },
      doCloseModal(state) {
        state.isOpen = false;
      },
    },
});

const { actions, reducer } = demoSlice;
export const { doOpenModal, doCloseModal } = actions;
export default reducer;
