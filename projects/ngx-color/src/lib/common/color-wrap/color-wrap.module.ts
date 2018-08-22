import { NgModule } from '@angular/core';
import { ColorWrap } from './color-wrap.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [ColorWrap],
    exports: [ColorWrap],
    imports: [CommonModule]
})
export class ColorWrapModule { }
