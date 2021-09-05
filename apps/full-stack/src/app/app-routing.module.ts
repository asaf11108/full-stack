import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('@full-stack/fe/auth').then(m => m.FeAuthModule) },
  { path: 'main',  loadChildren: () => import('@full-stack/fe/main').then(m => m.FeMainModule) },
  { path: '**', redirectTo: 'main' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
