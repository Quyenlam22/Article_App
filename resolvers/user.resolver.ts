import User from "../models/user.model";
import * as generate from "../helpers/generate";
import md5 from "md5";

// resolver-controller
export const resolversUser = {
    // # [POST, PUT, PATCH]
    Mutation: {
        registerUser: async(_: any, args: any) => {
            const { user } = args;
            
            const existUser = await User.findOne({
                email: user.email,
                deleted: false
            })
            
            if(existUser) {
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
                    token: data.token
                });
            }
        },
        
    }
};