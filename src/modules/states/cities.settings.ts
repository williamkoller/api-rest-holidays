import { TypeOrmModule } from '@nestjs/typeorm';
import { StatesController } from './controllers/states.controller';
import { State } from './entities/state.entity';
import { StatesRepository } from './repositories/states.repository';
import { StatesService } from './services/states.service';

export const imports = [TypeOrmModule.forFeature([State])];
export const providers = [StatesRepository, StatesService];
export const controllers = [StatesController];
