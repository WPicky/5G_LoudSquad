import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatDividerModule, MatIconModule,
} from '@angular/material';
import { MatListModule } from '@angular/material/list';

const modules = [
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    MatIconModule,
];

@NgModule({
    imports: [...modules],
    exports: [...modules],
    declarations: []
})
export class AngularMaterialModule { }
