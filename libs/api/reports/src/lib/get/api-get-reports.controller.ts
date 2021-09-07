import { Token } from '@full-stack/interfaces';
import { Controller, Get } from '@nestjs/common';

@Controller('get')
export class ApiGetReportsController {
  @Get('allData')
  allData(): Token {
    return { token: 'fgthr' };
  }
}
