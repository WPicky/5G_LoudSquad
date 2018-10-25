import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { appRoutes } from '@app/configs/routes';
import { NotFoundPageComponent } from '@app/core/components/not-found-page/not-found-page.component';
import { SharedModule } from '@app/shared/shared.module';
import { UsersModule } from '@app/users/users.module';
import { CoreModule } from '@app/core/core.module';

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
    CoreModule,
    SharedModule,
    UsersModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
