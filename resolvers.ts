import Article from "./models/article.model";

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
        }
    }
};