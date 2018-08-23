import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
    ViewEncapsulation,
    HostBinding,
} from '@angular/core';

import { isValidHex, RGBA } from '../../common';

@Component({
    selector: 'ngx-color-compact-fields',
    templateUrl: './compact-fields.component.html',
    styleUrls: ['./compact-fields.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class CompactFieldsComponent {
    @HostBinding('class.ngx-color-compact-fields')
    _hostClass = true;
    @Input() hex: string;
    @Input() rgb: RGBA;
    @Output() onChange = new EventEmitter<any>();
    HEXWrap: { [key: string]: string } = {
        marginTop: '-3px',
        marginBottom: '-3px',
        position: 'relative',
    };
    HEXinput: { [key: string]: string } = {
        width: '80%',
        padding: '0px',
        paddingLeft: '20%',
        border: 'none',
        outline: 'none',
        background: 'none',
        fontSize: '12px',
        color: '#333',
        height: '16px',
    };
    HEXlabel: { [key: string]: string } = {
        display: 'none',
    };
    RGBwrap: { [key: string]: string } = {
        marginTop: '-3px',
        marginBottom: '-3px',
        position: 'relative',
    };
    RGBinput: { [key: string]: string } = {
        width: '80%',
        padding: '0px',
        paddingLeft: '30%',
        border: 'none',
        outline: 'none',
        background: 'none',
        fontSize: '12px',
        color: '#333',
        height: '16px',
    };
    RGBlabel: { [key: string]: string } = {
        position: 'absolute',
        top: '6px',
        left: '0px',
        'line-height': '16px',
        'text-transform': 'uppercase',
        fontSize: '12px',
        color: '#999',
    };

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
        } else {
            this.onChange.emit({
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
}
