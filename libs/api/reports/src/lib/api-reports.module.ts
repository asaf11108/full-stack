import { ApiReportsController } from './api-reports.controller';
import { Module } from '@nestjs/common';
import { ApiGetReportsController } from './get/api-get-reports.controller';

@Module({
  controllers: [ApiGetReportsController, ApiReportsController],
  providers: [],
  exports: [],
})
export class ApiReportsModule {}
