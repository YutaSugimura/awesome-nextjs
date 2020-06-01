import Head from 'next/head';

export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/hello');
  const data = await res.json();
  const docs = data.docs;
  return { props: { docs } };
};

const Home = ({ docs }) => {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {docs.length > 0 &&
          docs.map((value, index) => (
            <p key={index}>{JSON.stringify(value)}</p>
          ))}
      </div>
    </div>
  );
};
export default Home;
