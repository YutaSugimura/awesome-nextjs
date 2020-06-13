import useSWR from 'swr';

const API = 'http://localhost:3000/api/graphql';

const Page = () => {
  const { loading, data, error } = useSWR(
    `
  {
    books {
      title
      author
    }
  }`,
    (query) => request(API, query),
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  console.log(data);

  return <div>graphql</div>;
};
export default Page;
