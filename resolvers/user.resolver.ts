import User from "../models/user.model";
import * as generate from "../helpers/generate";
import md5 from "md5";

// resolver-controller
export const resolversUser = {
    // [GET]
    Query: {
        getUser: async (_: any, args: any, context: any) => {
            const infoUser = await User.findOne({
                token: context["user"].token,
                deleted: false
            });

            if(infoUser) {
                return ({
                    code: "200",
                    message: "Success!",
                    id: infoUser.id,
                    fullName: infoUser.fullName,
                    email: infoUser.email,
                    token: infoUser.token
                });
            } else {
                return {
                    code: 400,
                    message: "Error!"
                };
            }
        }
    },

    // # [POST, PUT, PATCH]
    Mutation: {
        registerUser: async (_: any, args: any) => {
            const { user } = args;

            const existUser = await User.findOne({
                email: user.email,
                deleted: false
            })

            if (existUser) {
                return {
                    code: 400,
                    message: "Email existed!"
                };
            }
            else {
                user.password = md5(user.password);
                user.token = generate.generateRandomString(20);
                const newUser = new User(user);
                const data = await newUser.save();

                return ({
                    code: "200",
                    message: "Success!",
                    id: data.id,
                    fullName: data.fullName,
                    email: data.email,
                    token: data.token
                });
            }
        },
        loginUser: async (_: any, args: any) => {
            const { user } = args;

            const infoUser = await User.findOne({
                email: user.email,
                deleted: false
            })

            if (!infoUser) {
                return {
                    code: 400,
                    message: "Email not exist!"
                };
            }

            if (md5(user.password) !== infoUser.password) {
                return {
                    code: 400,
                    message: "Error password!"
                };
            }

            return ({
                code: "200",
                message: "Success!",
                id: infoUser.id,
                fullName: infoUser.fullName,
                email: infoUser.email,
                token: infoUser.token
            });
        },
    }
};