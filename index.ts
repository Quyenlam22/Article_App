import express, { Express } from "express";
import dotenv from "dotenv";
import * as database from "./config/database";

import { ApolloServer } from "apollo-server-express";
import { resolvers } from "./resolvers/index.resolver";
import { typeDefs } from "./typeDefs/index.typeDefs";
import { requireAuth } from "./middlewares/auth.middleware";

dotenv.config();

const startServer = async () => {
    const app: Express = express();
    const port: string | number = process.env.PORT || 3000;

    database.connect();

    app.use("/graphql", requireAuth)

    // GraphQL
    const apolloServer = new ApolloServer({
        typeDefs: typeDefs,
        resolvers: resolvers,
        introspection: true,
        context: ({ req }) => {
            return { ...req };
        }
    });

    await apolloServer.start();

    app.use(express.json());

    apolloServer.applyMiddleware({
        app: app as any,
        path: "/graphql"
    });

    app.listen(port, () => {
        console.log(`App listening on port ${port}`);
    })
};

startServer();

