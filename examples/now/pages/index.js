import Head from "next/head";

const Page = () => {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p>key: {process.env.NEXT_PUBLIC_KEY}</p>
      </main>
    </div>
  );
};
export default Page;
