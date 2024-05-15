import express, { json } from "express";
import { booksRouter } from "./routes/book.routs";
import { HandleErrors} from "./middleware/handleErrors.middleware";

export const app = express();

app.use(json());

app.use("/books", booksRouter);

app.use(HandleErrors.execute);