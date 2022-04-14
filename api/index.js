import express from "express";
import { apolloServer } from "./apolloServer.js";
import { connect } from "./db.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen({ port: 4000 }, async () => {
  try {
    connect();
  } catch (e) {
    console.log("Error: ", e.message);
  }

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  console.log(
    `🚀 Server ready at http://localhost:4000${apolloServer.graphqlPath}`
  );
});
