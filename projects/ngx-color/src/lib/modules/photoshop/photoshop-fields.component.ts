import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
    HostBinding,
    ViewEncapsulation,
} from '@angular/core';

import { isValidHex, HSV, RGB } from '../../common/public_api';

@Component({
    selector: 'ngx-color-photoshop-fields',
    templateUrl: './photoshop-fields.component.html',
    styleUrls: ['./photoshop-fields.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class PhotoshopFieldsComponent {
    @HostBinding('class.ngx-color-photoshop-fields')
    _hostClass = true;
    @Input() rgb: RGB;
    @Input() hsv: HSV;
    @Input() hex: string;
    @Output() onChange = new EventEmitter<any>();
    RGBinput: { [key: string]: string } = {
        marginLeft: '35%',
        width: '40%',
        height: '22px',
        border: '1px solid rgb(136, 136, 136)',
        boxShadow:
            'rgba(0, 0, 0, 0.1) 0px 1px 1px inset, rgb(236, 236, 236) 0px 1px 0px 0px',
        marginBottom: '2px',
        fontSize: '13px',
        paddingLeft: '3px',
        marginRight: '10px',
    };
    RGBwrap: { [key: string]: string } = {
        position: 'relative',
    };
    RGBlabel: { [key: string]: string } = {
        left: '0px',
        width: '34px',
        textTransform: 'uppercase',
        fontSize: '13px',
        height: '24px',
        lineHeight: '24px',
        position: 'absolute',
    };
    HEXinput: { [key: string]: string } = {
        marginLeft: '20%',
        width: '80%',
        height: '22px',
        border: '1px solid #888888',
        boxShadow: 'inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC',
        marginBottom: '3px',
        fontSize: '13px',
        paddingLeft: '3px',
    };
    HEXwrap: { [key: string]: string } = {
        position: 'relative',
    };
    HEXlabel: { [key: string]: string } = {
        position: 'absolute',
        top: '0px',
        left: '0px',
        width: '14px',
        textTransform: 'uppercase',
        fontSize: '13px',
        height: '24px',
        lineHeight: '24px',
    };

    round(v) {
        return Math.round(v);
    }
    handleValueChange({ data, $event }) {
        if (data['#']) {
            if (isValidHex(data['#'])) {
                this.onChange.emit({
                    data: {
                        hex: data['#'],
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
        } else if (data.h || data.s || data.v) {
            this.onChange.emit({
                data: {
                    h: data.h || this.hsv.h,
                    s: data.s || this.hsv.s,
                    v: data.v || this.hsv.v,
                    source: 'hsv',
                },
                $event,
            });
        }
    }
}
