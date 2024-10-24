import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    const newBook = this.booksService.create(createBookDto);
    return { statusCode: 201, data: newBook };
  }

  @Get()
  findAll() {
    return this.booksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.booksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    const updatedBook = this.booksService.update(+id, updateBookDto);
    return { statusCode: 200, data: updatedBook };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.booksService.remove(+id);
    return { statusCode: 204 };  // No Content
  }
}
