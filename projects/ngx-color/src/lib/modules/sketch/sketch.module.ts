import { NgModule } from '@angular/core';
import { SketchComponent } from './sketch.component';
import { SketchFieldsComponent } from './sketch-fields.component';
import { SketchPresetColorsComponent } from './sketch-preset-colors.component';
import { CommonModule } from '@angular/common';
import { AlphaModule, CheckboardModule, EditableInputModule, HueModule, SaturationModule, SwatchModule } from '../../common';

@NgModule({
    declarations: [
        SketchComponent,
        SketchFieldsComponent,
        SketchPresetColorsComponent,
    ],
    exports: [
        SketchComponent,
        SketchFieldsComponent,
        SketchPresetColorsComponent,
    ],
    imports: [
        CommonModule,
        AlphaModule,
        CheckboardModule,
        EditableInputModule,
        HueModule,
        SaturationModule,
        SwatchModule
    ],
})
export class ColorSketchModule { }
