import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    Output,
    HostBinding,
    ViewEncapsulation,
} from '@angular/core';

import { HSLA, HSLAsource } from '../helpers/color.interfaces';

@Component({
    selector: 'ngx-color-hue',
    templateUrl: './hue.component.html',
    styleUrls: ['./hue.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class HueComponent implements OnChanges {
    @HostBinding('class.ngx-color-hue')
    _hostClass = true;
    @Input() hsl: HSLA;
    @Input() pointer: { [key: string]: string };
    @Input() radius: number;
    @Input() shadow: string;
    @Input() hidePointer = false;
    @Input() direction: 'horizontal' | 'vertical' = 'horizontal';
    @Output() onChange = new EventEmitter<{ data: HSLAsource; $event: Event }>();
    left = '0px';
    top = '';

    ngOnChanges() {
        if (this.direction === 'horizontal') {
            this.left = `${this.hsl.h * 100 / 360}%`;
        } else {
            this.top = `${-(this.hsl.h * 100 / 360) + 100}%`;
        }
    }
    handleChange({ top, left, containerHeight, containerWidth, $event }) {
        let data: HSLAsource;
        if (this.direction === 'vertical') {
            let h;
            if (top < 0) {
                h = 359;
            } else if (top > containerHeight) {
                h = 0;
            } else {
                const percent = -(top * 100 / containerHeight) + 100;
                h = 360 * percent / 100;
            }

            if (this.hsl.h !== h) {
                data = {
                    h,
                    s: this.hsl.s,
                    l: this.hsl.l,
                    a: this.hsl.a,
                    source: 'rgb',
                };
            }
        } else {
            let h;
            if (left < 0) {
                h = 0;
            } else if (left > containerWidth) {
                h = 359;
            } else {
                const percent = left * 100 / containerWidth;
                h = 360 * percent / 100;
            }

            if (this.hsl.h !== h) {
                data = {
                    h,
                    s: this.hsl.s,
                    l: this.hsl.l,
                    a: this.hsl.a,
                    source: 'rgb',
                };
            }
        }
        if (!data) {
            return null;
        }
        this.onChange.emit({ data, $event });
    }
}
