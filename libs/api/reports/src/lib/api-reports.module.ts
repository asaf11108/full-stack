import { ApiAuthModule } from '@full-stack/api/auth';
import { Module } from '@nestjs/common';
import { ApiGetReportsController } from './get/api-get-reports.controller';

@Module({
  controllers: [ApiGetReportsController],
  imports: [ApiAuthModule],
  providers: [],
  exports: [],
})
export class ApiReportsModule {}
