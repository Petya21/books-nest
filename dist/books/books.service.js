"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksService = void 0;
const common_1 = require("@nestjs/common");
let BooksService = class BooksService {
    constructor() {
        this.books = [];
        this.nextId = 1;
    }
    create(createBookDto) {
        const newBook = { id: this.nextId++, ...createBookDto, reserved: false };
        this.books.push(newBook);
        return newBook;
    }
    findAll() {
        return this.books;
    }
    findOne(id) {
        const book = this.books.find((b) => b.id === id);
        if (!book) {
            throw new common_1.NotFoundException(`Book with ID ${id} not found`);
        }
        return book;
    }
    update(id, updateBookDto) {
        const bookIndex = this.books.findIndex((b) => b.id === id);
        if (bookIndex === -1) {
            throw new common_1.NotFoundException(`Book with ID ${id} not found`);
        }
        this.books[bookIndex] = { ...this.books[bookIndex], ...updateBookDto };
        return this.books[bookIndex];
    }
    remove(id) {
        const bookIndex = this.books.findIndex((b) => b.id === id);
        if (bookIndex === -1) {
            throw new common_1.NotFoundException(`Book with ID ${id} not found`);
        }
        this.books.splice(bookIndex, 1);
    }
};
exports.BooksService = BooksService;
exports.BooksService = BooksService = __decorate([
    (0, common_1.Injectable)()
], BooksService);
//# sourceMappingURL=books.service.js.map