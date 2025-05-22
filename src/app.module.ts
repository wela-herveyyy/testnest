import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesController } from './coffees/coffees.controller';
import { CoffeesService } from './coffees/coffees.service';
import { CoffeesModule } from './coffees/coffees.module';
import { DrizzlePGModule } from '@knaadh/nestjs-drizzle-pg';
import { DbModule } from './db/db.module';
import 'dotenv/config';
import * as schema from './db/schema';
@Module({
  imports: [
    CoffeesModule, // Method #1: Pass options object
    DbModule,
  ],

  controllers: [AppController, CoffeesController],
  providers: [AppService, CoffeesService],
})
export class AppModule {}
