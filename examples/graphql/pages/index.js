import Head from 'next/head';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const BOOKS = gql`
  {
    books {
      title
      author
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        {data &&
          data.books.map((value, index) => (
            <div key={index} style={{ borderBottom: '1px solid #111' }}>
              <p>title: {value.title}</p>
              <p>author: {value.author}</p>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Home;
