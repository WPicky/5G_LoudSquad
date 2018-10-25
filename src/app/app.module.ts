import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { appRoutes } from '@app/configs/routes';
import { NotFoundPageComponent } from '@app/shared/components/not-found-page/not-found-page.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
    declarations: [
        AppComponent,
        NotFoundPageComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        ),
        SharedModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
