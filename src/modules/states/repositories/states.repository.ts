import {
  AddStateRepository,
  FindStateByNameRepository,
  FindStatesRepository,
} from '@/data/protocols/db/state/';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { AddStateDto } from '@/modules/states/dtos/add-state/add-state.dto';
import { State } from '@/modules/states/entities/state.entity';

@Injectable()
export class StatesRepository
  implements
    AddStateRepository,
    FindStateByNameRepository,
    FindStatesRepository
{
  constructor(
    @InjectRepository(State)
    private readonly mongoRepo: MongoRepository<State>,
  ) {}

  public async add(addStateDto: AddStateDto): Promise<State> {
    const stateCreated = Object.assign({} as AddStateDto, addStateDto);
    return await this.mongoRepo.save(stateCreated);
  }

  public async findByName(name: string): Promise<State[]> {
    return await this.mongoRepo.findBy({
      name: new RegExp(name, 'i'),
    });
  }

  public async findAllStates(): Promise<State[]> {
    return await this.mongoRepo.find();
  }
}
