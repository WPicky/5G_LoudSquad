import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './components/users/list/list.component';
import { MatIconModule } from '@angular/material';
import { AngularMaterialModule } from '@app/angular-material.module';

@NgModule({
    declarations: [
        AppComponent,
        ListComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatIconModule,
        AngularMaterialModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
