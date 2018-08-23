import { NgModule } from '@angular/core';
import { BlockComponent } from './block.component';
import { BlockSwatchesComponent } from './block-swatches.component';
import { CommonModule } from '@angular/common';
import { CheckboardModule, SwatchModule, EditableInputModule } from '../../common/public_api';

@NgModule({
    declarations: [BlockComponent, BlockSwatchesComponent],
    exports: [BlockComponent, BlockSwatchesComponent],
    imports: [CommonModule, CheckboardModule, SwatchModule, EditableInputModule],
})
export class ColorBlockModule { }
