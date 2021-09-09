import { Module } from '@nestjs/common';

import { ApiReportsModule } from '@full-stack/api/reports';

@Module({
  imports: [ApiReportsModule],
})
export class AppModule {}
