import { defineConfig } from 'drizzle-kit';
import 'dotenv/config';
export default defineConfig({
  dialect: 'postgresql', // 'mysql' | 'sqlite' | 'turso'
  schema: ['./src/db/schema.ts'],
  dbCredentials: {
    url: process.env.DB_URL as string,
  },
});
