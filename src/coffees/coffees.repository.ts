import { Injectable, NotFoundException } from '@nestjs/common';
import { eq } from 'drizzle-orm';
import { DB } from 'src/db';
import { InjectDb } from 'src/db/db.provider';
import { coffees } from 'src/db/schema';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesRepository {
  constructor(@InjectDb() private db: DB) {}

  async find(id: number) {
    const res = await this.db
      .select()
      .from(coffees)
      .where(eq(coffees.id, id.toString()));
    if (!res[0]) {
      return null;
    }
    return res[0] as Coffee;
  }
  async all() {
    return this.db.select().from(coffees);
  }
  async create(coffee: Coffee) {
    const res = await this.db.insert(coffees).values(coffee as Coffee);
    if (!res[0]) {
      return null;
    }

    return res;
  }
}
