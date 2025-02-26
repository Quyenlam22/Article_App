import express, { Express } from "express";
import dotenv from "dotenv";
import * as database from "./config/database";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";

dotenv.config();

// GraphQL
const startServer = async () => {
    const app: Express = express();
    const port: string | number = process.env.PORT || 3000;

    database.connect();
    
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers
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

