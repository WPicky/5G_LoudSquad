import { Routes } from '@angular/router';
import { NotFoundPageComponent } from '@app/shared/components/not-found-page/not-found-page.component';

export const appRoutes: Routes = [
    { path: 'home', component: NotFoundPageComponent },
    { path: 'login', component: NotFoundPageComponent },
    { path: 'conversation',      component: NotFoundPageComponent },
    { path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    { path: '**', component: NotFoundPageComponent }
];
