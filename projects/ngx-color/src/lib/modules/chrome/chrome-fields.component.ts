import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
    HostBinding,
    ViewEncapsulation,
} from '@angular/core';
import { isValidHex, HSLA, RGBA } from '../../common/public_api';

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
    @Input() hsl: HSLA;
    @Input() rgb: RGBA;
    @Input() hex: string;
    @Output() onChange = new EventEmitter<any>();
    view = '';
    input: { [key: string]: string } = {
        fontSize: '11px',
        color: '#333',
        width: '100%',
        borderRadius: '2px',
        border: 'none',
        boxShadow: 'inset 0 0 0 1px #dadada',
        height: '21px',
        'text-align': 'center',
    };
    label: { [key: string]: string } = {
        'text-transform': 'uppercase',
        fontSize: '11px',
        'line-height': '11px',
        color: '#969696',
        'text-align': 'center',
        display: 'block',
        marginTop: '12px',
    };

    ngOnInit() {
        if (this.hsl.a === 1 && this.view !== 'hex') {
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
            if (this.hsl.a === 1) {
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
            } else if (data.a > 1) {
                data.a = 1;
            }

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
            const s = data.s && data.s.replace('%', '');
            const l = data.l && data.l.replace('%', '');
            this.onChange.emit({
                data: {
                    h: data.h || this.hsl.h,
                    s: Number(s || this.hsl.s),
                    l: Number(l || this.hsl.l),
                    source: 'hsl',
                },
                $event,
            });
        }
    }
}
