import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
    ViewEncapsulation,
    HostBinding,
    OnChanges
} from '@angular/core';
import { NgxColor } from '../helpers/ngx-color';
import { isNil } from 'lodash';
import { RGBA } from '../helpers/public_api';

export type AlphaDirection = 'horizontal' | 'vertical';

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
    _rgba: RGBA;
    @Input() color: NgxColor;
    @Input() pointer: { [key: string]: string };
    @Input() shadow: string;
    @Input() radius: string;
    @Input() direction: AlphaDirection;
    @Output() onChange = new EventEmitter<NgxColor>();
    gradient: { [key: string]: string };
    pointerLeft: number;
    pointerTop: number;

    private _setPosition(direction: AlphaDirection, actualColorRgb: RGBA) {
        if (direction === 'vertical') {
            this.pointerLeft = 0;
            this.pointerTop = actualColorRgb.a * 100;
            this.gradient = {
                background: `linear-gradient(to bottom, rgba(${actualColorRgb.r},${
                    actualColorRgb.g
                    },${actualColorRgb.b}, 0) 0%,
          rgba(${actualColorRgb.r},${actualColorRgb.g},${actualColorRgb.b}, 1) 100%)`,
            };
        } else {
            this.gradient = {
                background: `linear-gradient(to right, rgba(${actualColorRgb.r},${
                    actualColorRgb.g
                    },${actualColorRgb.b}, 0) 0%,
          rgba(${actualColorRgb.r},${actualColorRgb.g},${actualColorRgb.b}, 1) 100%)`,
            };
            this.pointerLeft = actualColorRgb.a * 100;
        }
    }

    ngOnChanges() {
        this._rgba = this.color.toRgb();
        this._setPosition(this.direction, this._rgba);
    }

    handleChange({ top, left, containerHeight, containerWidth, $event }) {
        let a;
        if (this.direction === 'vertical') {
            if (top < 0) {
                a = 0;
            } else if (top > containerHeight) {
                a = 1;
            } else {
                a = Math.round(top * 100 / containerHeight) / 100;
            }
        } else {
            if (left < 0) {
                a = 0;
            } else if (left > containerWidth) {
                a = 1;
            } else {
                a = Math.round(left * 100 / containerWidth) / 100;
            }
        }
        if (isNil(a) || this._rgba.a === a) {
            return null;
        }
        this.onChange.emit(new NgxColor({
            r: this._rgba.r,
            g: this._rgba.g,
            b: this._rgba.b,
            a: a
        }));
    }
}
