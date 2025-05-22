import { pgTable, serial, varchar } from 'drizzle-orm/pg-core';

export const coffees = pgTable('coffees', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 256 }),
  brandName: varchar('brand_name', { length: 256 }),
  flavors: varchar('flavors', { length: 256 }).array(),
});
