import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MdoButtonModule } from '@ctrl/ngx-github-buttons';

import {
    ColorAlphaModule,
    ColorBlockModule,
    ColorChromeModule,
    ColorCircleModule,
    ColorCompactModule,
    ColorGithubModule,
    ColorHueModule,
    ColorMaterialModule,
    ColorPhotoshopModule,
    ColorSketchModule,
    ColorSliderModule,
    ColorSwatchesModule,
    ColorTwitterModule
} from '@ngx-color-project/modules';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer.component';


@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
    ],
    imports: [
        BrowserModule,
        MdoButtonModule,
        ColorAlphaModule,
        ColorBlockModule,
        ColorChromeModule,
        ColorCircleModule,
        ColorCompactModule,
        ColorGithubModule,
        ColorHueModule,
        ColorMaterialModule,
        ColorPhotoshopModule,
        ColorSketchModule,
        ColorSliderModule,
        ColorSwatchesModule,
        ColorTwitterModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
