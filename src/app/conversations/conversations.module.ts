import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { ListComponent } from './components/list/list.component';
import { ContainerComponent } from './components/container/container.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
      ListComponent,
      ContainerComponent,
  ],
  exports: [
      ListComponent,
  ]
})
export class ConversationsModule { }
