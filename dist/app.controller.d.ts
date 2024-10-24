import { AppService } from './app.service';
import { BooksService } from './books/books.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): {
        message: string;
    };
}
export declare class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    findAll(): Promise<{
        books: any[];
    }>;
}
