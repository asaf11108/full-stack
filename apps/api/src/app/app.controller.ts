import { Controller, Get, Query, Res } from '@nestjs/common';
import { User, Token } from '@full-stack/api-interfaces';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('login')
  login(@Query() user: User): Token {
    return this.appService.getData();
  }
}
