import { NgModule } from '@angular/core';
import { ChromeComponent } from './chrome.component';
import { ChromeFieldsComponent } from './chrome-fields.component';
import { CommonModule } from '@angular/common';
import { AlphaModule, CheckboardModule, EditableInputModule, HueModule, SaturationModule } from '../../common/public_api';

@NgModule({
    declarations: [ChromeComponent, ChromeFieldsComponent],
    exports: [ChromeComponent, ChromeFieldsComponent],
    imports: [
        CommonModule,
        AlphaModule,
        CheckboardModule,
        EditableInputModule,
        HueModule,
        SaturationModule
    ],
})
export class ColorChromeModule { }
