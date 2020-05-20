import { renderHook, act } from '@testing-library/react-hooks';
import useCounter from '../sample';

test('useCounter', () => {
  const { result } = renderHook(() => useCounter());
  expect(result.current.counter).toBe(0);

  act(() => {
    result.current.increment();
  });
  expect(result.current.counter).toBe(1);

  act(() => {
    result.current.decrement();
  });
  expect(result.current.counter).toBe(0);
});
