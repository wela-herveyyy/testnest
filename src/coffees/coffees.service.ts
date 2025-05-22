import { Body, Injectable, NotFoundException, Res } from '@nestjs/common';
import {
  CoffeDTO,
  Coffee,
  CreateCoffeDto,
  UpdateCoffeeDto,
} from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees = [
    {
      id: 1,
      name: 'Shipwreck Roast',
      brand: 'Buddy Brew',
      flavors: ['chocolate', 'vanilla'],
    },
    {
      id: 2,
      name: 'Colombia',
      brand: 'Juan Valdez',
      flavors: ['intense', 'citric'],
    },
    {
      id: 3,
      name: 'Ethiopia Yirgacheffe',
      brand: 'Stumptown',
      flavors: ['floral', 'lemon'],
    },
    {
      id: 4,
      name: 'Sumatra Mandheling',
      brand: 'Intelligentsia',
      flavors: ['earthy', 'bold'],
    },
    {
      id: 5,
      name: 'Kenya AA',
      brand: 'Counter Culture',
      flavors: ['bright', 'fruity'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: number) {
    const coffee = this.coffees.find((item) => item.id === +id);
    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    return coffee;
  }

  create(@Body() createCoffeeDto: CoffeDTO) {
    console.log(createCoffeeDto);
    this.coffees.push(createCoffeeDto);
  }

  update(id: number, updateCoffeeDto: UpdateCoffeeDto) {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {
    }
  }

  remove(id: number) {
    const coffeeIndex = this.coffees.findIndex((item) => item.id === +id);
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}
