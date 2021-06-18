import AppError from "@shared/errors/AppError";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import authConfig from "@config/auth";


interface ITokenPayload{
        iat: number;
        exp: number;
        sub: string;
      
}

export default function isAutehnticated(
    request: Request,
    response:Response,
    next: NextFunction,
): void {
    const authHeader = request.headers.authorization;

    if (!authHeader){
        throw new AppError('JWT Token is missing');
    }

    const  [,token] = authHeader.split(' ');

    try{
        const dedodedToken = verify(token, authConfig.jwt.secret)
       

        const {sub} = dedodedToken as ITokenPayload;


        request.user ={
            id: sub,
        }

        return next();
    }catch{
        throw new AppError('Invalid JWT Token');
    }

}