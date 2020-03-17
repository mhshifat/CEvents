import { GraphQLServer, PubSub } from "graphql-yoga";
import { config } from "./config";
import { CBD } from "./database";
import { models } from "./models";
import { resolvers, typeDefs } from "./modules";
import { IContext } from "./types/context";

const pubsub = new PubSub();
const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: (): IContext => ({
    models,
    pubsub
  })
});

CBD()
  .then(() => {
    return server.start({
      port: config.APP.port,
      endpoint: "/api/v1",
      subscriptions: {
        path: "/subscription"
      }
    });
  })
  .then(() => {
    console.log("[ DemoApp ] A database connection has been established!");
    console.log("[ DemoApp ] The server is running on http://localhost:5000!");
  })
  .catch(err => {
    console.log(err);
  });
