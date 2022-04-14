import { ApolloServer, gql } from "apollo-server-express";
import { Books } from "./models.js";

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }

  type Mutation {
    addBook(title: String, author: String): Book
  }
`;

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    books: () => {
      return Books.find();
    },
  },

  Mutation: {
    addBook: (_root, { title, author }) => {
      return Books.create({ title, author });
    },
  },
};

export const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});
