import { NgModule } from '@angular/core';
import { HuePickerComponent } from './hue-picker.component';
import { CommonModule } from '@angular/common';
import { HueModule } from '@ngx-color-project/common';

@NgModule({
    declarations: [HuePickerComponent],
    exports: [HuePickerComponent],
    imports: [CommonModule, HueModule]
})
export class ColorHueModule { }
