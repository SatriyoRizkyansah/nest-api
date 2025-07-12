import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductModule } from './product/product.module';
import { DatabaseModule } from './database/database.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [UsersModule, DatabaseModule, ProductModule, OrderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
