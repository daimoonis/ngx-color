import { NgModule } from '@angular/core';
import { SwatchesComponent } from './swatches.component';
import { SwatchesGroupComponent } from './swatches-group.component';
import { SwatchesColorComponent } from './swatches-color.component';
import { CommonModule } from '@angular/common';
import { SwatchModule, RaisedModule } from '../../common';

@NgModule({
    declarations: [
        SwatchesComponent,
        SwatchesGroupComponent,
        SwatchesColorComponent,
    ],
    exports: [SwatchesComponent, SwatchesGroupComponent, SwatchesColorComponent],
    imports: [CommonModule, SwatchModule, RaisedModule],
})
export class ColorSwatchesModule { }
