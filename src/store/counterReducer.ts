import { createSlice } from "@reduxjs/toolkit";

type CounterState = {
  counter: number;
};
const firstInitialState: CounterState = { counter: 0 };

const CounterSlice = createSlice({
  name: "counter",
  initialState: firstInitialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
  },
});
export const CounterAction = CounterSlice.actions;
export default CounterSlice.reducer;
