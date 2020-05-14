import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const initialState = {
  count: 0
}

type CountState = typeof initialState;

const modules = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state: CountState) => {
      state.count += 1;
    },
    decrement: (state: CountState) => {
      state.count -= 1;
    },
    setCount: (state: CountState, action: PayloadAction<number>) => {
      state.count = action.payload;
    }
  }
});
export const { increment, decrement, setCount } = modules.actions
export default modules.reducer;
