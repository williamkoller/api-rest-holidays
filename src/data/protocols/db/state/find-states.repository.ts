import { State } from '@/modules/states/entities/state.entity';

export interface FindStatesRepository {
  findAllStates(): Promise<State[]>;
}
