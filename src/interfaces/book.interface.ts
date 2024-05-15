export interface IBook{
    id: number;
    name: string;
    pages: number;
    category: string;
    createdAt: Date;
    updatedAt: Date;
}

export type TCreatedBookData = Pick<IBook, "name" | "pages" | "category">;
export type TUpdatedBookData = Partial<TCreatedBookData>;