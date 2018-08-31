import { NgModule } from '@angular/core';
import { CheckboardComponent } from './checkboard.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [CheckboardComponent],
    exports: [CheckboardComponent],
    imports: [CommonModule]
})
export class CheckboardModule { }
