import { Token } from '@full-stack/interfaces';
import { Controller, Get } from '@nestjs/common';

@Controller(['reports/get'])
export class ApiGetReportsController {
  @Get('allData')
  allData(): Token {
    return { token: 'fgthr' };
  }
}
