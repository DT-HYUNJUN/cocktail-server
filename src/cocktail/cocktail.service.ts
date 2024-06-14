import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CreateCocktailDto } from './dto/create-cocktail.dto';
import { Cocktail, CocktailDocument } from './schemas/cocktail.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CocktailService {
  private readonly s3Client = new S3Client({
    region: this.configService.getOrThrow('AWS_S3_REGION'),
  });

  constructor(
    private readonly configService: ConfigService,
    @InjectModel(Cocktail.name) private cocktailModel: Model<CocktailDocument>,
  ) {}

  async upload(fileName: string, file: Buffer): Promise<string> {
    const bucketName = this.configService.getOrThrow('AWS_S3_BUCKET_NAME');
    const key = `${Date.now()}-${fileName}`;

    await this.s3Client.send(
      new PutObjectCommand({
        Bucket: bucketName,
        Key: key,
        Body: file,
      }),
    );
    return `https://${bucketName}.s3.amazonaws.com/${key}`;
  }

  async create(createCocktailDto: CreateCocktailDto): Promise<Cocktail> {
    const createdCocktail = new this.cocktailModel(createCocktailDto);
    return createdCocktail.save();
  }
}
