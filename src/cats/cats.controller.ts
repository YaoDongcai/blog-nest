import { Body, Controller, Get, Post } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './cat.interface';
@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get('/')
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Post('/create')
  async create(@Body() createCatDao: Cat): Promise<Cat> {
    return this.catsService.create(createCatDao);
  }
}
