import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
    ViewEncapsulation,
    HostBinding,
} from '@angular/core';
import { NgxColor, ColorEvent } from '../../common/public_api';

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
    @Input() color: NgxColor;
    @Output() onChange = new EventEmitter<ColorEvent>();

    handleChange({ data, $event }) {
        if (data.hex) {
            const newcolor = new NgxColor(data.hex);
            if (newcolor.isValid) {
                this.onChange.emit({ color: newcolor, $event });
            }
        } else {
            this.onChange.emit({
                color: new NgxColor({
                    r: data.r || this.color.r,
                    g: data.g || this.color.g,
                    b: data.b || this.color.b,
                }),
                $event
            });
        }
    }
}
