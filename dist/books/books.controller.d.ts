import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
export declare class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    create(createBookDto: CreateBookDto): {
        statusCode: number;
        data: {
            reserved: boolean;
            title: string;
            author: string;
            isbn: string;
            publishYear: number;
            id: number;
        };
    };
    findAll(): any[];
    findOne(id: string): any;
    update(id: string, updateBookDto: UpdateBookDto): {
        statusCode: number;
        data: any;
    };
    remove(id: string): {
        statusCode: number;
    };
}
