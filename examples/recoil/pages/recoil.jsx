import Link from "next/link";
import { useRecoilState } from "recoil";
import { counterState } from "../src/recoil";

const Page = () => {
  const [count, setCount] = useRecoilState(counterState);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <h1>useRecoilState</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <div>
        <Link href="/">previous</Link>
        <Link href="selector">next</Link>
      </div>
    </div>
  );
};
export default Page;
