import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    Output,
    ViewEncapsulation,
    HostBinding,
} from '@angular/core';

import { HSLA, RGBA } from '../helpers/color.interfaces';

@Component({
    selector: 'ngx-color-alpha',
    templateUrl: './alpha.component.html',
    styleUrls: ['./alpha.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class AlphaComponent implements OnChanges {
    @HostBinding('class.ngx-color-alpha')
    _hostClass = true;
    @Input() hsl: HSLA;
    @Input() rgb: RGBA;
    @Input() pointer: { [key: string]: string };
    @Input() shadow: string;
    @Input() radius: string;
    @Input() direction: 'horizontal' | 'vertical' = 'horizontal';
    @Output() onChange = new EventEmitter<any>();
    gradient: { [key: string]: string };
    pointerLeft: number;
    pointerTop: number;

    ngOnChanges() {
        if (this.direction === 'vertical') {
            this.pointerLeft = 0;
            this.pointerTop = this.rgb.a * 100;
            this.gradient = {
                background: `linear-gradient(to bottom, rgba(${this.rgb.r},${
                    this.rgb.g
                    },${this.rgb.b}, 0) 0%,
          rgba(${this.rgb.r},${this.rgb.g},${this.rgb.b}, 1) 100%)`,
            };
        } else {
            this.gradient = {
                background: `linear-gradient(to right, rgba(${this.rgb.r},${
                    this.rgb.g
                    },${this.rgb.b}, 0) 0%,
          rgba(${this.rgb.r},${this.rgb.g},${this.rgb.b}, 1) 100%)`,
            };
            this.pointerLeft = this.rgb.a * 100;
        }
    }
    handleChange({ top, left, containerHeight, containerWidth, $event }) {
        let data;
        if (this.direction === 'vertical') {
            let a;
            if (top < 0) {
                a = 0;
            } else if (top > containerHeight) {
                a = 1;
            } else {
                a = Math.round(top * 100 / containerHeight) / 100;
            }

            if (this.hsl.a !== a) {
                data = {
                    h: this.hsl.h,
                    s: this.hsl.s,
                    l: this.hsl.l,
                    a,
                    source: 'rgb',
                };
            }
        } else {
            let a;
            if (left < 0) {
                a = 0;
            } else if (left > containerWidth) {
                a = 1;
            } else {
                a = Math.round(left * 100 / containerWidth) / 100;
            }

            if (this.hsl.a !== a) {
                data = {
                    h: this.hsl.h,
                    s: this.hsl.s,
                    l: this.hsl.l,
                    a,
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
