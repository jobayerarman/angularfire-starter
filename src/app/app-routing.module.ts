import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Use RouterModule, Routes for activating routing in angular
import { Routes, RouterModule } from '@angular/router';

// Include components for in which router service to be used
// import { DashboardComponent } from './layout/dashboard.component';
import { DashboardModule } from './layout/dashboard.module';

const routes: Routes = [
  { path: '', loadChildren: () => import('./layout/dashboard.module').then(m => m.DashboardModule) },
  { path: 'dashboard', loadChildren: () => import('./layout/dashboard.module').then(m => m.DashboardModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
