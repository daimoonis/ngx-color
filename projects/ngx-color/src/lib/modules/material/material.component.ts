import { ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation } from '@angular/core';
import { ColorWrap, isValidHex } from '../../common';

@Component({
    selector: 'ngx-color-material',
    templateUrl: './material.component.html',
    styleUrls: ['./material.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class MaterialComponent extends ColorWrap {
    @HostBinding('class')
    _hostClass = 'ngx-color-material';
    HEXinput: { [key: string]: string } = {
        width: '100%',
        marginTop: '12px',
        fontSize: '15px',
        color: 'rgb(51, 51, 51)',
        padding: '0px',
        'border-width': '0px 0px 2px',
        outline: 'none',
        height: '30px',
    };
    HEXlabel: { [key: string]: string } = {
        position: 'absolute',
        top: '0px',
        left: '0px',
        fontSize: '11px',
        color: 'rgb(153, 153, 153)',
        'text-transform': 'capitalize',
    };
    RGBinput: { [key: string]: string } = {
        width: '100%',
        marginTop: '12px',
        fontSize: '15px',
        color: '#333',
        padding: '0px',
        border: '0px',
        'border-bottom': '1px solid #eee',
        outline: 'none',
        height: '30px',
    };
    RGBlabel: { [key: string]: string } = {
        position: 'absolute',
        top: '0px',
        left: '0px',
        fontSize: '11px',
        color: '#999999',
        'text-transform': 'capitalize',
    };
    constructor() {
        super();
    }
    handleValueChange({ data, $event }) {
        this.handleChange(data, $event);
    }
    handleInputChange({ data, $event }) {
        if (data.hex) {
            if (isValidHex(data.hex)) {
                this.handleValueChange({
                    data: {
                        hex: data.hex,
                        source: 'hex',
                    },
                    $event,
                });
            }
        } else if (data.r || data.g || data.b) {
            this.handleValueChange({
                data: {
                    r: data.r || this.rgb.r,
                    g: data.g || this.rgb.g,
                    b: data.b || this.rgb.b,
                    source: 'rgb',
                },
                $event,
            });
        }
    }
    afterValidChange() {
        this.HEXinput['border-bottom-color'] = this.hex;
    }
}
