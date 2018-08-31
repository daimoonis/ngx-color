import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    HostBinding,
    Input,
    Output,
    ViewEncapsulation,
    ChangeDetectorRef,
} from '@angular/core';
import { NgxColor, ColorEvent, HSL, HSLA } from '@ngx-color-project/common';

@Component({
    selector: 'ngx-color-sketch-fields',
    templateUrl: './sketch-fields.component.html',
    styleUrls: ['./sketch-fields.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class SketchFieldsComponent {
    @HostBinding('class.ngx-color-sketch-fields')
    _hostClass = true;
    _color: NgxColor;
    _colorHsl: HSL | HSLA;
    @Input()
    get color() {
        return this._color;
    }
    set color(color: NgxColor) {
        this.updateCurrentColorValues(color);
    }

    @Input() disableAlpha = false;
    @Output() onChange = new EventEmitter<ColorEvent>();

    constructor(private changeDetectorRef: ChangeDetectorRef) { }

    updateCurrentColorValues(color: NgxColor) {
        this._colorHsl = color.toHsl();
        this._color = color;
        this.changeDetectorRef.markForCheck();
    }

    round(value) {
        return Math.round(value);
    }

    handleChange({ data, $event }) {
        if (data.hex) {
            const newColor = new NgxColor(data.hex);
            if (newColor.isValid) {
                this.updateCurrentColorValues(newColor);
                this.onChange.emit({
                    color: newColor,
                    $event
                });
            }
        } else if (data.r || data.g || data.b) {
            const newColor = new NgxColor({
                r: data.r || this._color.r,
                g: data.g || this._color.g,
                b: data.b || this._color.b
            });
            this.updateCurrentColorValues(newColor);
            this.onChange.emit({ color: newColor, $event });
        } else if (data.a) {
            if (data.a < 0) {
                data.a = 0;
            } else if (data.a > 100) {
                data.a = 100;
            }
            data.a /= 100;
            const newColor = new NgxColor({
                h: this._colorHsl.h,
                s: this._colorHsl.s,
                l: this._colorHsl.l,
                a: Math.round(data.a * 100) / 100
            });
            this.updateCurrentColorValues(newColor);
            this.onChange.emit({ color: newColor, $event });
        } else if (data.h || data.s || data.l) {
            const newColor = new NgxColor({
                h: data.h || this._colorHsl.h,
                s: Number((data.s && data.s) || this._colorHsl.s),
                l: Number((data.l && data.l) || this._colorHsl.l)
            });
            this.updateCurrentColorValues(newColor);
            this.onChange.emit({ color: newColor, $event });
        }
    }
}
