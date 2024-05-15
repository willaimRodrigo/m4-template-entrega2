import { booksDatabase, generateId } from "../database/database"
import { IBook, TCreatedBookData, TUpdatedBookData } from "../interfaces/book.interface"

export class BookServices{
    

    createBooks(data: TCreatedBookData){

        const now = new Date();

        const newBook: IBook = { 
            id: generateId(),
            ...data,
            createdAt: now,
            updatedAt: now,
        };

        booksDatabase.push(newBook);

        return newBook;
    }

    getBooks(){
        return booksDatabase;
    }

    getOneBook(id: number){
        const findBook = booksDatabase.find(book => book.id === Number(id));
        return findBook;
    }

    updateBook(id: number, data: TUpdatedBookData){
        const currentBook = booksDatabase.find((book) => book.id === id) as IBook;

        const now = new Date();

        const updateBook: IBook = {
            ...currentBook,
            ...data, 
            updatedAt: now
        };
        
        const index = booksDatabase.findIndex((book) => book.id === id);

        booksDatabase.splice(index, 1, updateBook);

        return updateBook;
    }

    deleteBook(id: number){
        const index = booksDatabase.findIndex(book => book.id == Number(id));

        booksDatabase.splice(index, 1);
    }
}