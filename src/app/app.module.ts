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
import { ConversationsModule } from '@app/conversations/conversations.module';
import { AuthenticationModule } from '@app/authentication/authentication.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '@app/interceptors/auth.interceptor';

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
    ),
    AuthenticationModule,
    UsersModule,
    ConversationsModule,
    SharedModule,
    CoreModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
