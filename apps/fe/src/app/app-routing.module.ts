import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular'; // Open github issue

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('@full-stack/fe/auth').then(m => m.FeAuthModule) },
  { path: 'main',  loadChildren: () => import('@full-stack/fe/main').then(m => m.FeMainModule), /* canActivate: [AuthGuard] */ },
  { path: '**', redirectTo: 'main' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
