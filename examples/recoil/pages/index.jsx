import Head from "next/head";
import Link from "next/link";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { counterState } from "../src/recoil";

const Page = () => {
  const counter = useRecoilValue(counterState);
  const setCounter = useSetRecoilState(counterState);

  const increment = () => setCounter((oldCounter) => oldCounter + 1);
  const decrement = () => setCounter((oldCounter) => oldCounter - 1);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>useRecoilValue && useSetRecoilState</h1>
      <p>Count: {counter}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <div>
        <Link href="recoil">next</Link>
      </div>
    </div>
  );
};
export default Page;
