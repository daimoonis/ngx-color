import { NgModule } from '@angular/core';
import { SliderComponent } from './slider.component';
import { SliderSwatchComponent } from './slider-swatch.component';
import { SliderSwatchesComponent } from './slider-swatches.component';
import { CommonModule } from '@angular/common';
import { HueModule, SwatchModule } from '../../common';

@NgModule({
    declarations: [
        SliderComponent,
        SliderSwatchComponent,
        SliderSwatchesComponent,
    ],
    exports: [SliderComponent, SliderSwatchComponent, SliderSwatchesComponent],
    imports: [CommonModule, HueModule, SwatchModule],
})
export class ColorSliderModule { }
