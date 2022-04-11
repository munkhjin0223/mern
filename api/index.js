const express = require("express");
const { apolloServer } = require("./apolloServer");
const { connect } = require("./db");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen({ port: 4000 }, async () => {
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  console.log(
    `🚀 Server ready at http://localhost:4000${apolloServer.graphqlPath}`
  );

  try {
    await connect();
  } catch (e) {
    console.log("Error: ", e.message);
  }
});
