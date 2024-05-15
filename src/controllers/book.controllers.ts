import { Request, Response } from "express";
import { BookServices } from "../services/book.services";

export class BookController{
    createBooks(req: Request, res: Response){
        const bookService = new BookServices();

        const book = bookService.createBooks(req.body);

        return res.status(201).json(book);
    }

    getBooks(req: Request, res: Response){
        const bookService = new BookServices();

        const book = bookService.getBooks();

        return res.status(200).json(book);
    }

    getOneBook(req: Request, res: Response){
        const bookService = new BookServices();

        const book = bookService.getOneBook(+req.params.id);

        return res.status(200).json(book);
    }

    updateBook(req: Request, res: Response){
        const bookService = new BookServices();

        const book = bookService.updateBook(+req.params.id, req.body);

        return res.status(200).json(book);
    }

    deleteBook(req: Request, res: Response): Response{
        const bookService = new BookServices();

        bookService.deleteBook(+req.params.id);

        return res.status(204).json();
    }
}