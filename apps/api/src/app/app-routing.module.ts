import { Module } from '@nestjs/common';
import { RouterModule, Routes } from '@nestjs/core';
import { ApiReportsModule } from '@full-stack/api/reports';

const routes: Routes = [
  {
    path: 'reports',
    module: ApiReportsModule,
  },
];

const modules = [ApiReportsModule, RouterModule.register(routes)];

@Module({
  imports: modules,
  exports: modules,
})
export class AppRoutingModule {}
