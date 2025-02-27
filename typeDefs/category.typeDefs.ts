import { gql } from "apollo-server-express";

// typeDefs-models
export const typeDefsCategory = gql`
    type Category {
        id: ID,
        title: String,
        avatar: String,
    }

    # [GET]
    type Query {
        # hello: String,
        getListCategory: [Category],
        getCategory(id: ID): Category
    }

    input CategoryInput {
        title: String,
        avatar: String,
    }

    # [POST, PUT, PATCH]
    type Mutation {
        createCategory(category: CategoryInput): Category,
        deletedCategory(id: ID): String,
        updateCategory(id: ID, category: CategoryInput): Category,
    }

`;