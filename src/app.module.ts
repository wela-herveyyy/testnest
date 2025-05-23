import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesController } from './coffees/coffees.controller';
import { CoffeesModule } from './coffees/coffees.module';
import { DbModule } from './db/db.module';
@Module({
  imports: [
    CoffeesModule, // Method #1: Pass options object
    DbModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
