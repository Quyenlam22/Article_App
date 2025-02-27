import { gql } from "apollo-server-express";

// typeDefs-models
export const typeDefsArticle = gql`
    type Article {
        id: ID,
        title: String,
        avatar: String,
        description: String,
        category: Category
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
        categoryId: String,
    }

    # [POST, PUT, PATCH]
    type Mutation {
        createArticle(article: ArticleInput): Article,
        deletedArticle(id: ID): String,
        updateArticle(id: ID, article: ArticleInput): Article,
    }

`;