import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    HostBinding,
    Input,
    Output,
    ViewEncapsulation,
} from '@angular/core';

import { isValidHex, HSLA, RGBA } from '../../common';

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
    @Input() hsl: HSLA;
    @Input() rgb: RGBA;
    @Input() hex: string;
    @Input() disableAlpha = false;
    @Output() onChange = new EventEmitter<any>();
    input: { [key: string]: string } = {
        width: '100%',
        padding: '4px 10% 3px',
        border: 'none',
        boxSizing: 'border-box',
        boxShadow: 'inset 0 0 0 1px #ccc',
        fontSize: '11px',
    };
    label: { [key: string]: string } = {
        display: 'block',
        textAlign: 'center',
        fontSize: '11px',
        color: '#222',
        paddingTop: '3px',
        paddingBottom: '4px',
        textTransform: 'capitalize',
    };

    round(value) {
        return Math.round(value);
    }
    handleChange({ data, $event }) {
        if (data.hex) {
            if (isValidHex(data.hex)) {
                this.onChange.emit({
                    data: {
                        hex: data.hex,
                        source: 'hex',
                    },
                    $event,
                });
            }
        } else if (data.r || data.g || data.b) {
            this.onChange.emit({
                data: {
                    r: data.r || this.rgb.r,
                    g: data.g || this.rgb.g,
                    b: data.b || this.rgb.b,
                    source: 'rgb',
                },
                $event,
            });
        } else if (data.a) {
            if (data.a < 0) {
                data.a = 0;
            } else if (data.a > 100) {
                data.a = 100;
            }
            data.a /= 100;

            this.onChange.emit({
                data: {
                    h: this.hsl.h,
                    s: this.hsl.s,
                    l: this.hsl.l,
                    a: Math.round(data.a * 100) / 100,
                    source: 'rgb',
                },
                $event,
            });
        } else if (data.h || data.s || data.l) {
            this.onChange.emit({
                data: {
                    h: data.h || this.hsl.h,
                    s: Number((data.s && data.s) || this.hsl.s),
                    l: Number((data.l && data.l) || this.hsl.l),
                    source: 'hsl',
                },
                $event,
            });
        }
    }
}
