import { Controller, Get, Query, Res } from '@nestjs/common';
import { Token } from '@full-stack/interfaces';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('login')
  login(): Token {
    return this.appService.getData();
  }
}
