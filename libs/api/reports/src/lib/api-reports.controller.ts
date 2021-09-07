import { Token } from '@full-stack/interfaces';
import { Controller, Get } from '@nestjs/common';

@Controller()
export class ApiReportsController {
  @Get('allData')
  allData(): Token {
    return { token: 'fgthr' };
  }
}
