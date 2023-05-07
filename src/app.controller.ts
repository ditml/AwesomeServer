import { Controller, Get, Post, Header, HttpCode, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  @HttpCode(204)
  @Header('Cache-Control', 'none')
  create(): string {
    return 'This action adds a new book';
  }

  @Get()
  findAll(): string {
    return 'This action returns all books';
  }

  @Get(':id')
  findOne(@Param() params): string {
    console.log(params.id);
    return `This action returns a #${params.id} book`;
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
