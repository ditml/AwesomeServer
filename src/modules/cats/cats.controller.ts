import {
  Body,
  Controller,
  Res,
  Get,
  Put,
  Delete,
  Param,
  HttpCode,
  HttpStatus,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { CatsService } from './cats.service';
import { Cat } from 'src/schemas/cat.schema';
import { CreateCatDto } from './dto/create-cat.dto';
import { response } from 'express';

@Controller('/')
export class CatsController {
  constructor(private catService: CatsService) {}

  @Post('cat')
  async createCat(@Res() response, @Body() cat: Cat) {
    const newCat = await this.catService.postCat(cat);
    return response.status(HttpStatus.CREATED).json({
      newCat,
    });
  }

  @Get('cats')
  getCats() {
    return this.catService.getAllCats();
  }

  @Get('cat')
  getCat(@Body() cat: Cat) {
    // console.log('getcat id ' + id);  // @Param('id') id
    // console.log('cat ' + cat.id);  // @Body() cat: Cat

    return this.catService.getCatById(cat.id);
  }

  @Delete('cat')
  DeleteCat(@Body() cat: Cat) {
    console.log(cat.id);
    return this.catService.deleteCatById(cat.id);
  }

  @Put('cat')
  async PutCat(@Res() response, @Body() cat: Cat) {
    const updatedCat = await this.catService.putCatById(cat.id, cat);

    return response.status(HttpStatus.OK).json({
      updatedCat,
    });
  }

  @Put('cat')
  async update(@Res() response, @Param('id') id, @Body() cat: Cat) {
    console.log('Put cat/:id ' + cat.id);

    // const updatedCat = await this.catService.update(id, cat);
    // return response.status(HttpStatus.OK).json({
    //   updatedCat,
    // });
    return response.status(HttpStatus.OK).json({
      message: 'OK',
    });
  }
}
