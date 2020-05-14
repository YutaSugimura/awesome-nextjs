import { AppThunk } from "../store";
import { setCount } from "../actionReducer/counter";

export const asyncIncrement = (number: number): AppThunk => async dispatch => {
  setTimeout(() => {
    dispatch(setCount(number));
  }, 1000);
}
