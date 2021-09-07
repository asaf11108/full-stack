import { Module } from '@nestjs/common';
import { ApiReportsController } from './api-reports.controller';

@Module({
  controllers: [ApiReportsController],
  providers: [],
  exports: [],
})
export class ApiReportsModule {}
