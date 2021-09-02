import { Controller, Get, Query } from '@nestjs/common';

import { User, Token, GenericResponse } from '@full-stack/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('login')
  login(@Query() user: User): GenericResponse<Token> {
    return this.appService.getData();
  }
}
