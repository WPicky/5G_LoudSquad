import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule, MatSnackBarModule,
} from '@angular/material';
import { MatListModule } from '@angular/material/list';

const modules = [
  MatButtonModule,
  MatListModule,
  MatDividerModule,
  MatIconModule,
  MatSelectModule,
  MatFormFieldModule,
  MatInputModule,
  MatSnackBarModule,
];

@NgModule({
  imports: [...modules],
  exports: [...modules],
  declarations: []
})
export class AngularMaterialModule { }
