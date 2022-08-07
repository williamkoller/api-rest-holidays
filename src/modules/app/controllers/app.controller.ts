import { Controller, Get, Res } from '@nestjs/common';
import { ApiExcludeController } from '@nestjs/swagger';
import { Response } from 'express';

@ApiExcludeController()
@Controller()
export class AppController {
  @Get()
  redirect(@Res() res: Response): void {
    res.status(302).redirect('/api/docs');
  }
}
