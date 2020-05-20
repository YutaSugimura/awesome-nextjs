import { useState, useCallback } from 'react';

type hooks = {
  counter: number;
  increment: () => void;
  decrement: () => void;
};

const useCounter = (): hooks => {
  const [counter, setCount] = useState<number>(0);

  const increment = useCallback(() => setCount(counter + 1), [counter]);
  const decrement = useCallback(() => setCount(counter - 1), [counter]);

  return { counter, increment, decrement };
};
export default useCounter;
