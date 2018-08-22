import { NgModule } from '@angular/core';
import { PhotoshopComponent } from './photoshop.component';
import { PhotoshopPreviewsComponent } from './photoshop-previews.component';
import { PhotoshopButtonComponent } from './photoshop-button.component';
import { PhotoshopFieldsComponent } from './photoshop-fields.component';
import { CommonModule } from '@angular/common';
import { EditableInputModule, HueModule, AlphaModule, SwatchModule, SaturationModule } from '../../common';

@NgModule({
    declarations: [
        PhotoshopComponent,
        PhotoshopPreviewsComponent,
        PhotoshopButtonComponent,
        PhotoshopFieldsComponent,
    ],
    exports: [
        PhotoshopComponent,
        PhotoshopPreviewsComponent,
        PhotoshopButtonComponent,
        PhotoshopFieldsComponent,
    ],
    imports: [
        CommonModule,
        EditableInputModule,
        HueModule,
        AlphaModule,
        SwatchModule,
        SaturationModule,
    ],
})
export class ColorPhotoshopModule { }
