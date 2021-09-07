import { Module } from '@nestjs/common';
import { BeReportsController } from './be-reports.controller';

@Module({
  controllers: [BeReportsController],
  providers: [],
  exports: [],
})
export class BeReportsModule {}
