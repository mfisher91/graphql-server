import path from "path";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { importSchema } from "graphql-import";
import { makeExecutableSchema } from "graphql-tools";
import resolvers from "./resolvers";

const typeDefs = importSchema(path.join(__dirname, "./schema.graphql"));
const schema = makeExecutableSchema({ typeDefs, resolvers });
const app = express();
let apolloServer = null;

async function startServer() {
  apolloServer = new ApolloServer({
    schema,
    resolvers,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
}

startServer();

app.listen({ port: 4100 }, () =>
  console.log(
    `🚀 Server ready at http://localhost:4100${apolloServer.graphqlPath}`
  )
);
