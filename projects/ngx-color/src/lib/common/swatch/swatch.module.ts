import { NgModule } from '@angular/core';
import { SwatchComponent } from './swatch.component';
import { CommonModule } from '@angular/common';
import { CheckboardModule } from '../checkboard/public_api';

@NgModule({
    declarations: [SwatchComponent],
    exports: [SwatchComponent],
    imports: [CommonModule, CheckboardModule],
})
export class SwatchModule { }
