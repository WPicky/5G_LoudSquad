import { Routes } from '@angular/router';
import { NotFoundPageComponent } from '@app/core/components/not-found-page/not-found-page.component';
import { ContainerComponent } from '@app/conversations/components/container/container.component';
import { LoginPageComponent } from '@app/authentication/components/login-page/login-page.component';
import { AuthGuard } from '@app/guards/auth.guard';
import { AuthenticatedPageComponent } from '@app/core/components/authenticated-page/authenticated-page.component';

export const appRoutes: Routes = [
  {
    path: 'auth',
    children: [
      { path: 'login', component: LoginPageComponent },
    ],
  },
  {
    path: 'app',
    component: AuthenticatedPageComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: NotFoundPageComponent, outlet: 'authenticatedRouter' },
      { path: 'conversation/:id', component: ContainerComponent, outlet: 'authenticatedRouter' },
    ],
  },
  {
    path: '',
    redirectTo: '/app',
    pathMatch: 'full',
  },
  { path: '**', component: NotFoundPageComponent },
];
