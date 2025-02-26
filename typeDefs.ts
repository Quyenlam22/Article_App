import { gql } from "apollo-server-express";

// typeDefs-models
export const typeDefs = gql`
    type Article {
        id: ID,
        title: String,
        avatar: String,
        description: String,
        categoryId: String
    }

    # [GET]
    type Query {
        # hello: String,
        getListArticle: [Article],
        getArticle(id: ID): Article,
    }

    input ArticleInput {
        title: String,
        avatar: String,
        description: String,
    }

    # [POST, PUT, PATCH]
    type Mutation {
        createArticle(article: ArticleInput): Article,
        deletedArticle(id: ID): String
    }

`;