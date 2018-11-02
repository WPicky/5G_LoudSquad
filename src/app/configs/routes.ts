import { Routes } from '@angular/router';
import { NotFoundPageComponent } from '@app/core/components/not-found-page/not-found-page.component';
import { ContainerComponent } from '@app/conversations/components/container/container.component';

export const appRoutes: Routes = [
    { path: 'home', component: NotFoundPageComponent },
    { path: 'login', component: NotFoundPageComponent },
    { path: 'conversation/:id', component: ContainerComponent },
    { path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    { path: '**', component: NotFoundPageComponent }
];
