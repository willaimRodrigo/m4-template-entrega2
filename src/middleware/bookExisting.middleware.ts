import { NextFunction, Request, Response } from "express";
import { booksDatabase } from "../database/database";
import { AppError } from "../error/AppErrors";


export class BookExisting{
    static execute(req: Request, res: Response, next: NextFunction){
        const id = req.params.id;

        const existingBookName = booksDatabase.find(book => book.id === Number(req.params.id));

        if(booksDatabase.some(book => book.name === req.body.name)){
            throw new AppError("Book already registered.", 409);
        }

        res.locals.book = existingBookName;

        next();
    }
}