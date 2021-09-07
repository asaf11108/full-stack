import { ApiReportsModule } from '@full-stack/api/reports';
import { Module } from '@nestjs/common';
import { RouterModule, Routes } from 'nest-router';

const routes: Routes = [
    {
      path: '/reports',
      module: ApiReportsModule,
    },
  ];

@Module({
    imports: [RouterModule.forRoutes(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
