CREATE TABLE "coffees" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256),
	"brand_name" varchar(256),
	"flavors" varchar(256)[]
);
