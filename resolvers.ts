import Article from "./models/article.model";
import Category from "./models/category.model";

// resolver-controller
export const resolvers = {
    Query: {
        getListArticle: async () => {
            const articles = await Article.find({
                deleted: false
            });

            return articles;
        },
        getArticle: async (_: any, args: any) => {
            const { id } = args;

            const article = await Article.findOne({
                _id: id,
                deleted: false
            });

            return article;
        },

        getListCategory: async () => {
            const categories = await Category.find({
                deleted: false
            });

            return categories;
        },
        getCategory: async (_: any, args: any) => {
            const { id } = args;

            const category = await Category.findOne({
                _id: id,
                deleted: false
            });

            return category;
        }
    },

    Mutation: {
        createArticle: async(_: any, args: any) => {
            const { article } = args;

            const record = new Article(article);
            record.save();

            return record;
        },
        deletedArticle: async (_: any, args: any) => {
            const { id } = args;

            const article = await Article.updateOne({
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