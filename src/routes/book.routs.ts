import { Router } from "express";
import { BookController } from "../controllers/book.controllers";
import { IsBookUnique } from "../middleware/isBookUnique.middleware";
import { BookExisting } from "../middleware/bookExisting.middleware";

export const booksRouter = Router();

const booksControllers = new BookController();

booksRouter.post("/", BookExisting.execute, booksControllers.createBooks);

booksRouter.get("/", booksControllers.getBooks);

booksRouter.get("/:id", IsBookUnique.execute, booksControllers.getOneBook);

booksRouter.patch("/:id", BookExisting.execute, IsBookUnique.execute, booksControllers.updateBook);

booksRouter.delete("/:id", IsBookUnique.execute, booksControllers.deleteBook);