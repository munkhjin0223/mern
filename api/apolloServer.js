const { ApolloServer, gql } = require("apollo-server-express");
const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const bookSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  author: String,
});

const Books = mongoose.model("books", bookSchema);

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
    books: async () => {
      try {
        const books = [
          {
            author: "Rhiannon Frater",
            title: "The First Days",
          },
          {
            author: "J.L. Bourne",
            title: "Day by Day Armageddon",
          },
        ];

        return books;
      } catch (e) {
        console.log("e: ", e.message);
      }
    },
  },

  Mutation: {
    addBook: (_root, { title, author }) => {
      return Books.create({ title, author });
    },
  },
};

exports.apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});
