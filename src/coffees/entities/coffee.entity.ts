import { IsNumber, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
export class Coffee {
  id?: number | string;
  name?: string;
  brand?: string;
  flavors?: string[];
}

export class CoffeDTO {
  @IsNumber()
  readonly id: number; // 'id' is explicitly optional here (number or undefined)
  @IsString()
  readonly name: string;
  @IsString()
  readonly brand: string;
  @IsString({ each: true })
  readonly flavors: string[];
}

export class CreateCoffeDto extends PartialType(CoffeDTO) {}
export class UpdateCoffeeDto extends PartialType(CoffeDTO) {}
