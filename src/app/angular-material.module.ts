import { NgModule } from '@angular/core';
import { MatButtonModule, MatListModule, MatDividerModule } from '@angular/material';

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
