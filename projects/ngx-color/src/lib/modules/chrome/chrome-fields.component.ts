import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
    HostBinding,
    ViewEncapsulation,
    ChangeDetectorRef,
} from '@angular/core';
import { NgxColor, HSLA, RGBA } from '../../common/public_api';

@Component({
    selector: 'ngx-color-chrome-fields',
    templateUrl: './chrome-fields.component.html',
    styleUrls: ['./chrome-fields.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class ChromeFieldsComponent implements OnInit {
    @HostBinding('class.ngx-color-chrome-fields')
    _hostClass = true;
    @Input() disableAlpha;
    _color: NgxColor;
    _colorHsl: HSLA;
    _colorRgb: RGBA;
    @Input()
    get color() {
        return this._color;
    }
    set color(color: NgxColor) {
        if (color.equals(this._color)) {
            return;
        }
        this.updateCurrentColorValues(color);
    }
    @Output() onChange = new EventEmitter<any>();
    view = '';
    constructor(private changeDetectorRef: ChangeDetectorRef) { }

    updateCurrentColorValues(color: NgxColor) {
        this._colorHsl = color.toHsl();
        this._colorRgb = color.toRgb();
        this._color = color;
        if (this.view === 'hex' && this._colorHsl.a !== 1) {
            this.toggleViews();
        }
        this.changeDetectorRef.markForCheck();
    }

    ngOnInit() {
        if (this._colorHsl.a === 1 && this.view !== 'hex') {
            this.view = 'hex';
        } else if (this.view !== 'rgb' && this.view !== 'hsl') {
            this.view = 'rgb';
        }
    }

    toggleViews() {
        if (this.view === 'hex') {
            this.view = 'rgb';
        } else if (this.view === 'rgb') {
            this.view = 'hsl';
        } else if (this.view === 'hsl') {
            if (this._colorHsl.a === 1) {
                this.view = 'hex';
            } else {
                this.view = 'rgb';
            }
        }
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
            } else if (data.a > 1) {
                data.a = 1;
            }
            const newColor = new NgxColor({
                h: this._colorHsl.h,
                s: this._colorHsl.s,
                l: this._colorHsl.l,
                a: Math.round(data.a * 100) / 100
            });
            this.updateCurrentColorValues(newColor);
            this.onChange.emit({ color: newColor, $event });
        } else if (data.h || data.s || data.l) {
            const s = data.s && data.s.replace('%', '');
            const l = data.l && data.l.replace('%', '');
            const newColor = new NgxColor({
                h: data.h || this._colorHsl.h,
                s: Number(s || this._colorHsl.s),
                l: Number(l || this._colorHsl.l),
            });
            this.updateCurrentColorValues(newColor);
            this.onChange.emit({ color: newColor, $event });
        }
    }
}
