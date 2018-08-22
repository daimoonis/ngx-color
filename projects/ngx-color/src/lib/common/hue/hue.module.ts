import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HueComponent } from './hue.component';
import { CoordinatesModule } from '../coordinates/public_api';

@NgModule({
    declarations: [HueComponent],
    exports: [HueComponent],
    imports: [CommonModule, CoordinatesModule],
})
export class HueModule { }
