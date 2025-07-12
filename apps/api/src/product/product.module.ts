import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  providers: [ProductService],
  imports: [DatabaseModule],
  controllers: [ProductController],
})
export class ProductModule {}
