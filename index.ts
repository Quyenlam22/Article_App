import express, { Express } from "express";
import dotenv from "dotenv";
import * as database from "./config/database";
import { ApolloServer, gql } from "apollo-server-express";

dotenv.config();

// GraphQL
const startServer = async () => {
    const app: Express = express();
    const port: string | number = process.env.PORT || 3000;

    database.connect();

    // typeDefs-models
    const typeDefs = gql`
        type Query{
            hello: String
        }
    `;

    // resolver-controller
    const resolvers = {
        Query: {
            hello: () => {
                return "Hello World!";
            }
        }
    };

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

