import { gql } from "apollo-server-express";

// typeDefs-models
export const typeDefsUser = gql`
    type User {
        id: ID,
        fullName: String,
        email: String,
        token: String,
        code: Int,
        message: String
    }

    input RegisterUserInput {
        fullName: String,
        email: String,
        password: String,
    }

    input LoginUserInput {
        email: String,
        password: String,
    }

    # [POST, PUT, PATCH]
    type Mutation {
        registerUser(user: RegisterUserInput): User,
        loginUser(user: LoginUserInput): User,
    }

`;