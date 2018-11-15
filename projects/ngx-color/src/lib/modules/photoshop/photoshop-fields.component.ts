import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
    HostBinding,
    ViewEncapsulation,
} from '@angular/core';
import { NgxColor, ColorEvent } from '../../common/public_api';

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
    @Input() color: NgxColor;
    @Output() onChange = new EventEmitter<ColorEvent>();
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
            const newColor = new NgxColor(data['#']);
            if (newColor.isValid) {
                this.onChange.emit({ color: newColor, $event });
            }
        } else if (data.r || data.g || data.b) {
            this.onChange.emit({
                color: new NgxColor({
                    r: data.r || this.color.r,
                    g: data.g || this.color.g,
                    b: data.b || this.color.b
                }),
                $event
            });
        } else if (data.h || data.s || data.v) {
            const hsvColor = this.color.toHsv();
            this.onChange.emit({
                color: new NgxColor({
                    h: data.h || hsvColor.h,
                    s: data.s || hsvColor.s,
                    v: data.v || hsvColor.v
                }),
                $event
            });
        }
    }
}
