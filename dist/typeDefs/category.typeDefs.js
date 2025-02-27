"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefsCategory = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.typeDefsCategory = (0, apollo_server_express_1.gql) `
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
