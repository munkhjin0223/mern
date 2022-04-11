import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const mutation = `
  mutation addBook($title: String, $author: String) {
    addBook(title: $title, author: $author) {
      title
      author
    }
  }
`;

export default function AddBook({ refetch }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const [addBookMutation] = useMutation(gql(mutation));

  const submit = e => {
    e.preventDefault();

    addBookMutation({
      variables: {
        title,
        author,
      },
    })
      .then(() => {
        refetch();
      })
      .catch(e => {
        console.log(e.message);
      });
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control
          value={title}
          onChange={e => setTitle(e.target.value)}
          type="title"
          placeholder="Enter title"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Author</Form.Label>
        <Form.Control
          value={author}
          onChange={e => setAuthor(e.target.value)}
          type="author"
          placeholder="Enter author"
        />
      </Form.Group>
      <Button variant="primary" type="button" onClick={submit}>
        Submit
      </Button>
    </Form>
  );
}
