import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';

import { ColorEvent } from '@daimoonis/ngx-color';
import { OverlayContainer } from '@angular/cdk/overlay';

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
