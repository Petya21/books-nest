import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { BooksService } from './books/books.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello() {
    return {
      message: this.appService.getHello()
    };
  }
}
@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  @Render('books')
  async findAll() {
    const books = await this.booksService.findAll();
    return { books };
  }
}
