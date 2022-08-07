import { AddStateDto } from '@/modules/states/dtos/add-state/add-state.dto';
import { State } from '@/modules/states/entities/state.entity';

export interface AddStateRepository {
  add(addStateDto: AddStateDto): Promise<State>;
}
