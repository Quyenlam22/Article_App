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

    type Category {
        id: ID,
        title: String,
        avatar: String,
    }

    # [GET]
    type Query {
        # hello: String,
        getListArticle: [Article],
        getArticle(id: ID): Article,

        getListCategory: [Category],
        getCategory(id: ID): Category
    }

    input ArticleInput {
        title: String,
        avatar: String,
        description: String,
    }

    input CategoryInput {
        title: String,
        avatar: String,
    }

    # [POST, PUT, PATCH]
    type Mutation {
        createArticle(article: ArticleInput): Article,
        deletedArticle(id: ID): String,
        updateArticle(id: ID, article: ArticleInput): Article,

        createCategory(category: CategoryInput): Category,
        deletedCategory(id: ID): String,
        updateCategory(id: ID, category: CategoryInput): Category,
    }

`;