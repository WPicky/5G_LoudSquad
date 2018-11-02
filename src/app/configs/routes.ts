import { Routes } from '@angular/router';
import { NotFoundPageComponent } from '@app/core/components/not-found-page/not-found-page.component';
import {HomePageComponent} from '@app/core/components/home-page/home-page.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomePageComponent },
    { path: 'login', component: NotFoundPageComponent },
    { path: 'conversation',      component: NotFoundPageComponent },
    { path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    { path: '**', component: NotFoundPageComponent }
];
