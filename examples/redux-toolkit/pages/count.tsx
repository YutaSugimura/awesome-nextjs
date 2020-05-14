import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { increment, decrement } from '../redux/actionReducer/counter';

export default () => {
  const countState = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  const incrementCount = () => {
    dispatch(increment());
  };

  const decrementCount = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <p>{countState.count}</p>
    </div>
  );
};
