import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';

import { ColorEvent } from '@ngx-color-project/common';
import { OverlayContainer } from '@angular/cdk/overlay';
import { TinyColor } from '@ctrl/tinycolor';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
    @HostBinding('class') componentCssClass;
    title = 'app';
    primaryColor = '#194D33';
    state = {
        h: 150,
        s: 0.50,
        l: 0.20,
        a: 1,
    };

    sketchPresetColors = [
        '#D0021B',
        '#F5A623',
        '#F8E71C',
        '#8B572A',
        '#7ED321',
        '#417505',
        '#BD10E0',
        '#9013FE',
        '#4A90E2',
        '#50E3C2',
        '#B8E986',
        '#000000',
        '#4A4A4A',
        '#9B9B9B',
        '#FFFFFF'
    ];
    // rgb(255, 0, 127) nice color
    constructor(public overlayContainer: OverlayContainer) { }

    ngOnInit() {
        this.setTheme('ngx-color-light-theme');
    }

    changeComplete($event: ColorEvent) {
        this.state = $event.color.toHsl();
        this.primaryColor = $event.color.toHexString();
    }

    setTheme(theme: string) {
        this.componentCssClass = theme.concat(' primary-bg-color primary-text-color');
        const classList = this.overlayContainer.getContainerElement().classList;
        const toRemove = Array.from(classList).filter((item: string) =>
            item.includes('-theme')
        );
        if (toRemove.length) {
            classList.remove(...toRemove);
        }
        classList.add(theme);
    }
}
