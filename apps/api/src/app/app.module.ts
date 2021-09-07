import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiReportsModule } from '@full-stack/api/reports';

@Module({
  imports: [ApiReportsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
