import { NgModule } from '@angular/core';
import { AlphaComponent } from './alpha.component';
import { CommonModule } from '@angular/common';
import { CheckboardModule } from '../checkboard/public_api';
import { CoordinatesModule } from '../coordinates/public_api';

@NgModule({
    declarations: [AlphaComponent],
    exports: [AlphaComponent],
    imports: [CommonModule, CheckboardModule, CoordinatesModule],
})
export class AlphaModule { }
