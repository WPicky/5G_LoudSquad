import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticatedPageComponent } from '@app/core/components/authenticated-page/authenticated-page.component';
import { AuthenticationModule } from '@app/authentication/authentication.module';
import { UsersModule } from '@app/users/users.module';
import { ConversationsModule } from '@app/conversations/conversations.module';
import { SharedModule } from '@app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { appRoutes } from '@app/configs/routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
        appRoutes,
    ),
    UsersModule,
    ConversationsModule,
    SharedModule,
  ],
  declarations: [AuthenticatedPageComponent]
})
export class CoreModule { }
