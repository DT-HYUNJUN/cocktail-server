import {
  Body,
  Controller,
  FileTypeValidator,
  Get,
  MaxFileSizeValidator,
  ParseFilePipe,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CocktailService } from './cocktail.service';
import { CreateCocktailDto } from './dto/create-cocktail.dto';
import { ThrottlerGuard } from '@nestjs/throttler';

@Controller('cocktail')
export class CocktailController {
  constructor(private readonly cocktailService: CocktailService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          // new MaxFileSizeValidator({
          //   maxSize: 1000,
          // }),
          // new FileTypeValidator({ fileType: 'image/jpeg' }),
        ],
      }),
    )
    file: Express.Multer.File,
    @Body() createCocktailDto: CreateCocktailDto,
  ) {
    const iamgeUrl = await this.cocktailService.upload(
      file.originalname,
      file.buffer,
    );
    createCocktailDto.strDrinkThumb = iamgeUrl;
    return this.cocktailService.create(createCocktailDto);
  }

  @Get('list')
  async getCocktails() {
    return this.cocktailService.findAll();
  }
}
