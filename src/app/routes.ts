import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ArticlesComponent } from './articles/articles.component';
import { GroupsComponent } from './groups/groups.component';
import { UsersComponent } from './users/users.component';
import { AuthGuard } from './auth_guard.service';

export const routes: Routes = [
  {
    path: '', component: HomeComponent, canActivate: [AuthGuard]
  },
  {
    path: 'login', component: LoginComponent,
  },
  {
    path: 'articles', component: ArticlesComponent, canActivate: [AuthGuard]
  },
  {
    path: 'groups', component: GroupsComponent, canActivate: [AuthGuard]
  },
  {
    path: 'users', component: UsersComponent, canActivate: [AuthGuard]
  }
]

export const APP_ROUTER_PROVIDERS: ModuleWithProviders = RouterModule.forRoot(routes);
