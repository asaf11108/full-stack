import { AuthGuard } from '@full-stack/fe/auth';
import { MainComponent } from './main/main.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
	{
		path: '',
		component: MainComponent,
    canActivate: [AuthGuard]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class FeMainRoutingModule {}
