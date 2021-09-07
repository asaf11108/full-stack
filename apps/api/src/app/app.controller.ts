import { Controller, Get, Query, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('login')
  login(): any {
    return this.appService.getData();
  }
}
