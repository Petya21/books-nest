import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
export declare class BooksService {
    private books;
    private nextId;
    create(createBookDto: CreateBookDto): {
        reserved: boolean;
        title: string;
        author: string;
        isbn: string;
        publishYear: number;
        id: number;
    };
    findAll(): any[];
    findOne(id: number): any;
    update(id: number, updateBookDto: UpdateBookDto): any;
    remove(id: number): void;
}
