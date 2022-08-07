import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AddStateDto } from '@/modules/states/dtos/add-state/add-state.dto';
import { State } from '@/modules/states/entities/state.entity';
import { ApiTags } from '@nestjs/swagger';
import { StatesService } from '@/modules/states/services/states.service';

@ApiTags('states')
@Controller('states')
export class StatesController {
  constructor(private readonly statesService: StatesService) {}

  @Post()
  public async store(@Body() addStateDto: AddStateDto): Promise<State> {
    return await this.statesService.newState(addStateDto);
  }

  @Get(':name')
  public async show(@Param('name') name: string): Promise<State[]> {
    return await this.statesService.findStatesByName(name);
  }

  @Get()
  public async index(): Promise<State[]> {
    return await this.statesService.findStates();
  }
}
