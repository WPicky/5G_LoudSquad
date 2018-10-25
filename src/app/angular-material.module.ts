import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatDividerModule,
} from '@angular/material';
import { MatListModule } from '@angular/material/list';

@NgModule({
    imports: [
        MatButtonModule,
        MatListModule,
        MatDividerModule,
    ],
    exports: [
        MatButtonModule,
        MatListModule,
        MatDividerModule,
    ],
    declarations: []
})
export class AngularMaterialModule { }
