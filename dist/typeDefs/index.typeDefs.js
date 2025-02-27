"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const article_typeDefs_1 = require("./article.typeDefs");
const category_typeDefs_1 = require("./category.typeDefs");
exports.typeDefs = [article_typeDefs_1.typeDefsArticle, category_typeDefs_1.typeDefsCategory];
