import "reflect-metadata";
import { createConnection } from "typeorm";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server";
import { BookResolver } from "./resolvers/BookResolver";

const main = async () => {
  await createConnection();
  const schema = await buildSchema({
    resolvers: [BookResolver]
  });
  const server = new ApolloServer({ schema });
  await server.listen(4000).then(({ url }) => {
    console.log(`Gateway Server up at ${url}`);
  });
};
main();
