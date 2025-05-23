import {
  flatten,
  Injectable,
  NotFoundException,
  NotImplementedException,
} from '@nestjs/common';
import { eq } from 'drizzle-orm';
import { DB } from 'src/db';
import { InjectDb } from 'src/db/db.provider';
import { flavors } from 'src/db/schema';
import {
  CreateFlavorDto,
  Flavor,
  UpdateFlavorDto,
} from 'src/entities/flavor.entity';

@Injectable()
export class FlavorsRepository {
  constructor(@InjectDb() private db: DB) {}

  async find(id: string): Promise<Flavor> {
    const res = await this.db.select().from(flavors).where(eq(flavors.id, id));
    if (!res[0]) {
      throw new NotFoundException(`Flavor #${id} not found`);
    }
    return res[0] as Flavor;
  }
  async all() {
    return this.db.select().from(flavors);
  }

  async create(flavor: CreateFlavorDto): Promise<Flavor> {
    const res = await this.db.insert(flavors).values(flavor);
    if (!res) {
      throw new NotImplementedException(`Flavor is not created`);
    }
    return res;
  }
  async update(id: string, flavor: UpdateFlavorDto): Promise<Flavor> {
    const res = await this.db
      .update(flavors)
      .set(flavor)
      .where(eq(flavors.id, id));
    if (!res) {
      throw new NotImplementedException(`Flavor #${id} not updated`);
    }
    return res;
  }
  async remove(id: string) {
    const res = await this.db.delete(flavors).where(eq(flavors.id, id));
    if (!res) {
      throw new NotImplementedException(`Flavor #${id} not deleted`);
    }
    return res;
  }
}
