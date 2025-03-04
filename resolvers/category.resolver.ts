import Category from "../models/category.model";

// resolver-controller
export const resolversCategory = {
    // # [GET]
    Query: {
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

    // # [POST, PUT, PATCH]
    Mutation: {
        createCategory: async(_: any, args: any) => {
            const { category } = args;

            const record = new Category(category);
            record.save();

            return record;
        },
        deletedCategory: async (_: any, args: any) => {
            const { id } = args;

            await Category.updateOne({
                _id: id,
            }, {
                deleted: true,
                deletedAt: new Date()
            });

            return "Delete Successfully!";
        },
        updateCategory: async (_: any, args: any) => {
            const { id, category } = args;

            await Category.updateOne({
                _id: id,
            }, category);

            const record = await Category.findOne({
                _id: id,
            });

            return record;
        }
    }
};