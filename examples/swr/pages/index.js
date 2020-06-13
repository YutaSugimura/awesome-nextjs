import Head from 'next/head';
import useSWR from 'swr';
import fetch from 'unfetch';

const fetcher = (url) => fetch(url).then((r) => r.json());

const Page = () => {
  const { data, error } = useSWR('/api/hello', fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>...loading</div>;

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <div>{data.name}</div>
      </div>
    </div>
  );
};
export default Page;
