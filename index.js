const express = require("express");
const app = express();
var cors = require("cors");
const PORT = 6969;
const { graphqlHTTP } = require("express-graphql");
const schema = require("./graphql/schemas/index");
const db = require("./connection/index");

app.use(cors("*"));

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log("Server is running");
});

db.connectToDB();
