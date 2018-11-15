import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
} from '@daimoonis/ngx-color';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer.component';
import { MatButtonModule, MatIconModule, MatMenuModule } from '@angular/material';

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
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
        MatButtonModule,
        MatIconModule,
        MatMenuModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
