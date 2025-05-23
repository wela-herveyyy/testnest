import { Injectable, NotFoundException } from '@nestjs/common';
import { FlavorsRepository } from './flavors.repository';
import { CreateFlavorDto, UpdateFlavorDto } from 'src/entities/flavor.entity';

@Injectable()
export class FlavorsService {
  constructor(private readonly flavorsRepository: FlavorsRepository) {}
  findAll() {
    return this.flavorsRepository.all();
  }
  findOne(id: string) {
    const flavor = this.flavorsRepository.find(id);
    if (!flavor) {
      throw new NotFoundException(`Flavor #${id} not found`);
    }
    return flavor;
  }
  create(flavor: CreateFlavorDto) {
    const newFlavor = this.flavorsRepository.create(flavor);
    if (!newFlavor) {
      throw new NotFoundException(`Flavor #${flavor.name} not found`);
    }
    return newFlavor;
  }
  update(id: string, flavor: UpdateFlavorDto) {
    const existingFlavor = this.flavorsRepository.update(id, flavor);
    if (!existingFlavor) {
      throw new NotFoundException(`Flavor #${id} not found`);
    }
    return existingFlavor;
  }
  remove(id: string) {
    const flavor = this.flavorsRepository.remove(id);
    if (!flavor) {
      throw new NotFoundException(`Flavor #${id} not found`);
    }
    return flavor;
  }
}
