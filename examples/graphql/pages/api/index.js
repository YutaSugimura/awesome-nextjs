import { ApolloServer, gql } from 'apollo-server-micro';

const typeDefs = gql`
  type Query {
    books: [Book!]!
  }
  type Book {
    title: String
    author: String
  }
`;

const books = [
  {
    title: 'Harry Potter and Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

const resolvers = {
  Query: {
    books: () => books,
  },
};

export const config = {
  api: {
    bodyParser: false,
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export default apolloServer.createHandler({ path: '/api' });
