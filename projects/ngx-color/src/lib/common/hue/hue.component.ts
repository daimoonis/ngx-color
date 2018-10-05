import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
    HostBinding,
    ViewEncapsulation,
    OnChanges
} from '@angular/core';

import { NgxColor } from '../helpers/ngx-color';

export type HueDirection = 'horizontal' | 'vertical';

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
    private _hue: number;
    @Input() color: NgxColor;
    @Input() pointer: { [key: string]: string };
    @Input() radius: number;
    @Input() shadow: string;
    @Input() hidePointer = false;
    @Input() direction: HueDirection = 'horizontal';
    @Output() onChange = new EventEmitter<NgxColor>();
    left = '0px';
    top = '';

    private _setPosition(direction: HueDirection, hue: number) {
        if (direction === 'horizontal') {
            this.left = `${hue * 100 / 360}%`;
        } else {
            this.top = `${-(hue * 100 / 360) + 100}%`;
        }
    }

    ngOnChanges() {
        this._hue = this.color.toHsl().h;
        this._setPosition(this.direction, this._hue);
    }

    handleChange({ top, left, containerHeight, containerWidth, $event }) {
        let h;
        if (this.direction === 'vertical') {
            if (top < 0) {
                h = 359;
            } else if (top > containerHeight) {
                h = 0;
            } else {
                const percent = -(top * 100 / containerHeight) + 100;
                h = 360 * percent / 100;
            }
        } else {
            if (left < 0) {
                h = 0;
            } else if (left > containerWidth) {
                h = 359;
            } else {
                const percent = left * 100 / containerWidth;
                h = 360 * percent / 100;
            }
        }
        if (!h || this._hue === h) {
            return null;
        }
        this._setPosition(this.direction, h);
        this.onChange.emit(new NgxColor({ a: this.color.toRgb().a, h: h, l: 0.5, s: 1 }));
    }
}
