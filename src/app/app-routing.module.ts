import { NgModule, inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';
import { canActivate, canActivateChild } from './auth-guard.service';
import { CanComponentNavigateService } from './can-component-navigate.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './servers/server/server-resolver.service';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'users',
    canDeactivate: [CanComponentNavigateService],
    children: [
      {
        path: ':id/:name',
        component: UserComponent,
      },
    ],
    component: UsersComponent,
  },

  {
    path: 'servers',
    canActivate: [canActivate],
    canActivateChild: [canActivateChild],
    children: [
      {
        path: ':id',
        component: ServerComponent,
        resolve: {
          server: (route: ActivatedRouteSnapshot) =>
            inject(ServerResolver).resolve(route),
        },
      },
      {
        path: ':id/edit',
        component: EditServerComponent,
      },
    ],
    component: ServersComponent,
  },
  { path: 'not-found', component: PageNotFoundComponent },
  // { path: 'not-found', component: ErrorPageComponent ,data: { message:'Page not found'},
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
