import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { ListComponent } from '@app/users/components/list/list.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
    ],
    declarations: [
        ListComponent,
    ],
    exports: [
        ListComponent,
    ],
})
export class UsersModule { }
