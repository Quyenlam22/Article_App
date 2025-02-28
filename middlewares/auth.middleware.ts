import { NextFunction, Request, Response } from "express";
import User from "../models/user.model";

interface CustomRequest extends Request {
    user?: any; 
}

export const requireAuth = async (req: CustomRequest, res: Response, next: NextFunction): Promise<void> => {
    if(req.headers.authorization){
        const token: string = req.headers.authorization.split(" ")[1];
        
        const user = await User.findOne({
            token: token,
            deleted: false
        }).select("-password");

        if(!user){
            return;
        }

        req.user = user;
    }
    next();

}