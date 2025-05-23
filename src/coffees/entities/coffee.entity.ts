import { IsNumber, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
export class Coffee {
  id?: string;
  name?: string;
  brandName?: string;
  // flavors?: string[];
  flavorId?: string;
}

export class CoffeDTO {
  @IsString()
  readonly name: string;
  @IsString()
  readonly brandName: string;
  // @IsString({ each: true })
  // readonly flavors: string[];
  @IsString()
  readonly flavorId: string;
}

export class CreateCoffeDto extends PartialType(CoffeDTO) {}
export class UpdateCoffeeDto extends PartialType(CoffeDTO) {
  @IsNumber()
  readonly id: string;
}
