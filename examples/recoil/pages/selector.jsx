import Link from "next/link";
import { useRecoilState } from "recoil";
import { powState } from "../src/recoil";

const Page = () => {
  const [counter, setCounter] = useRecoilState(powState);

  const x2 = () => setCounter(counter);

  return (
    <div>
      <h1>selector</h1>
      <p>{counter}</p>
      <button onClick={x2}>x2</button>
      <div>
        <Link href="recoil">previous</Link>
      </div>
    </div>
  );
};
export default Page;
