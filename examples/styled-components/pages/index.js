import Head from "next/head";
import Title from "../src/Components/title";
import Typo from "../src/Components/typo";

const Home = () => {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Title>My page</Title>
        <Typo>package: styled-components</Typo>
      </div>
    </div>
  );
};
export default Home;
