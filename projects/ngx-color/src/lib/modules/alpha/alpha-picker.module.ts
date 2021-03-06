import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlphaPickerComponent } from './alpha-picker.component';
import { AlphaModule, CheckboardModule } from '../../common/public_api';

@NgModule({
    declarations: [AlphaPickerComponent],
    exports: [AlphaPickerComponent],
    imports: [CommonModule, AlphaModule, CheckboardModule]
})
export class ColorAlphaModule { }
