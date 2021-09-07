import { Module } from '@nestjs/common';
import { ApiGetReportsController } from './get/api-get-reports.controller';

@Module({
  controllers: [ApiGetReportsController],
  providers: [],
  exports: [],
})
export class ApiReportsModule {}
