import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { AddStateDto } from '@/modules/states/dtos/add-state/add-state.dto';
import { State } from '@/modules/states/entities/state.entity';
import { StatesRepository } from '@/modules/states/repositories/states.repository';

@Injectable()
export class StatesService {
  constructor(private readonly statesRepo: StatesRepository) {}

  public async newState(addStateDto: AddStateDto): Promise<State> {
    await this.findStateConflictName(addStateDto.name);
    return await this.statesRepo.add(addStateDto);
  }

  public async findStateConflictName(name: string): Promise<State> {
    const [state] = await this.statesRepo.findByName(name);

    if (state) {
      throw new ConflictException('There is already a state with that name.');
    }

    return state;
  }

  public async findStatesByName(name: string): Promise<State[]> {
    const state = await this.statesRepo.findByName(name);

    if (!state) {
      throw new NotFoundException('State not found.');
    }

    return state;
  }

  public async findStates(): Promise<State[]> {
    const states = await this.statesRepo.findAllStates();

    if (!states.length) {
      throw new NotFoundException('No record found.');
    }

    return states;
  }
}
