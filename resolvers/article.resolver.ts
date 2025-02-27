import Article from "../models/article.model";
import Category from "../models/category.model";

// resolver-controller
export const resolversArticle = {
    // # [GET]
    Query: {
        getListArticle: async (_: any, args: any) => {
            const { 
                sortKey, 
                sortValue, 
                currentPage, 
                limitItems,
                filterKey,
                filterValue
            } = args;

            const find: {[key: string]: any} = {
                deleted: false
            }
            
            //Sort
            const sort: {[key: string]: any} = {};

            if(sortKey && sortValue) {
                sort[sortKey] = sortValue;
            }

            //Pagination
            const skip = (currentPage - 1) * limitItems;

            //FilterStatus
            if(filterKey && filterValue) {
                find[filterKey] = filterValue
            }

            const articles = await Article.find(find).sort(sort).limit(limitItems).skip(skip);

            return articles;
        },
        getArticle: async (_: any, args: any) => {
            const { id } = args;

            const article = await Article.findOne({
                _id: id,
                deleted: false
            });

            return article;
        }
    },

    Article: {
        category: async (article: any) => {
            const category = await Category.findOne({
                _id: article.categoryId
            });

            return category;
        }
    },

    // # [POST, PUT, PATCH]
    Mutation: {
        createArticle: async(_: any, args: any) => {
            const { article } = args;

            const record = new Article(article);
            record.save();

            return record;
        },
        deletedArticle: async (_: any, args: any) => {
            const { id } = args;

            await Article.updateOne({
                _id: id,
            }, {
                deleted: true,
                deletedAt: new Date()
            });

            return "Delete Successfully!";
        },
        updateArticle: async (_: any, args: any) => {
            const { id, article } = args;

            await Article.updateOne({
                _id: id,
            }, article);

            const record = await Article.findOne({
                _id: id,
            });

            return record;
        }
    }
};