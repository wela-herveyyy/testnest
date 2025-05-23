import { Body, Injectable, NotFoundException, Res } from '@nestjs/common';
import { CoffeDTO, UpdateCoffeeDto } from './entities/coffee.entity';
import { CoffeesRepository } from './coffees.repository';

@Injectable()
export class CoffeesService {
  constructor(private readonly coffeeRespority: CoffeesRepository) {}

  findAll() {
    return this.coffeeRespority.all();
  }

  findOne(id: number) {
    const coffee = this.coffeeRespority.find(id);
    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    return coffee;
  }

  create(@Body() createCoffeeDto: CoffeDTO) {
    const coffee = this.coffeeRespority.create(createCoffeeDto);
    if (!coffee) {
      throw new NotFoundException(`Coffee #${createCoffeeDto.name} not found`);
    }

    return coffee;
  }

  update(id: number, updateCoffeeDto: UpdateCoffeeDto) {
    const existingCoffee = this.findOne(id);
    if (!existingCoffee) {
    }
  }

  remove(id: number) {
    const coffee = this.remove(id);
  }
}
