import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewUserComponent } from './user/new-user.component';
import { EditUserComponent } from './user/edit-user.component';
import { EditUserResolver } from './user/edit-user.resolver';

export const rootRouterConfig: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'new-user', component: NewUserComponent },
  { path: 'details/:id', component: EditUserComponent, resolve: { data: EditUserResolver } }
];
