import { gql, useQuery } from "@apollo/client";
import "./App.css";
import AddBook from "./AddBook";

const query = `
  query books {
    books {
      title
      author
    }
  }`;

function App() {
  const { data, refetch } = useQuery(gql(query));

  console.log("data: ", data);

  const books = data ? data.books : [];

  return (
    <article style={{ margin: "20px auto", width: "800px" }}>
      <h1>Books</h1>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <b>Title: </b> {book.title} <br />
            <b>Author: </b> {book.author} <br />
          </li>
        ))}
      </ul>
      <AddBook refetch={refetch} />
    </article>
  );
}

export default App;
