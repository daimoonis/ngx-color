import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaturationComponent } from './saturation.component';
import { CoordinatesModule } from '../coordinates/public_api';

@NgModule({
    declarations: [SaturationComponent],
    exports: [SaturationComponent],
    imports: [CommonModule, CoordinatesModule],
})
export class SaturationModule { }
