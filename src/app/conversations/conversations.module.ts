import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { ListComponent } from './components/list/list.component';
import { ContainerComponent } from './components/container/container.component';
import { CreateButtonComponent } from './components/create-button/create-button.component';
import { CreateModalComponent } from './components/create-modal/create-modal.component';

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
  ],
  exports: [
    ListComponent,
  ],
  entryComponents: [
    CreateButtonComponent,
    CreateModalComponent,
  ],
})
export class ConversationsModule { }
