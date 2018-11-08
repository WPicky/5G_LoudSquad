import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { ListComponent } from './components/list/list.component';
import { ContainerComponent } from './components/container/container.component';
import { CreateButtonComponent } from './components/create-button/create-button.component';
import { CreateModalComponent } from './components/create-modal/create-modal.component';
import { AddMemberModalComponent } from './components/add-member-modal/add-member-modal.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    ListComponent,
    ContainerComponent,
    CreateButtonComponent,
    CreateModalComponent,
    AddMemberModalComponent,
  ],
  exports: [
    ListComponent,
  ],
  entryComponents: [
    CreateButtonComponent,
    CreateModalComponent,
    AddMemberModalComponent,
  ],
})
export class ConversationsModule { }
