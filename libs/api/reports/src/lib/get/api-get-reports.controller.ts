import { Controller, Get, StreamableFile } from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';

@Controller(['reports/get'])
export class ApiGetReportsController {
    @Get('allData')
    allData(): StreamableFile {
        const file = createReadStream(join(__dirname, 'assets/all_data.csv'));
        return new StreamableFile(file);
  }
}
