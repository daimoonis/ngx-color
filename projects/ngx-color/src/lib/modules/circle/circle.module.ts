import { NgModule } from '@angular/core';
import { CircleComponent } from './circle.component';
import { CircleSwatchComponent } from './circle-swatch.component';
import { CommonModule } from '@angular/common';
import { SwatchModule } from '@ngx-color-project/common';

@NgModule({
    declarations: [CircleComponent, CircleSwatchComponent],
    exports: [CircleComponent, CircleSwatchComponent],
    imports: [CommonModule, SwatchModule]
})
export class ColorCircleModule { }
