import { NextFunction, Request, Response } from "express";
import { booksDatabase } from "../database/database";
import { AppError } from "../error/AppErrors";

export class IsBookUnique{
    static execute(req: Request, res: Response, next: NextFunction){
        const id = +req.params.id;

        if(!booksDatabase.some(book => book.id === id)){
            throw new AppError("Book not found.", 404);
        }

        next();
    }
}