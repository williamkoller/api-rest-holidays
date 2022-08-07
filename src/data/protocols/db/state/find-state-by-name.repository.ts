import { State } from '@/modules/states/entities/state.entity';

export interface FindStateByNameRepository {
  findByName(name: string): Promise<State[]>;
}
