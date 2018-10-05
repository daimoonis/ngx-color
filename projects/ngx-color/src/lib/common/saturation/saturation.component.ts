import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    Output,
    HostBinding,
    ViewEncapsulation,
} from '@angular/core';

import { HSVA } from '../helpers/color.interfaces';
import { NgxColor } from '../helpers/ngx-color';

@Component({
    selector: 'ngx-color-saturation',
    templateUrl: './saturation.component.html',
    styleUrls: ['./saturation.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class SaturationComponent implements OnChanges {
    @HostBinding('class.ngx-color-saturation')
    _hostClass = true;
    @Input() color: NgxColor;
    @Input() radius: number;
    @Input() pointer: { [key: string]: string };
    @Input() circle: { [key: string]: string };
    @Output() onChange = new EventEmitter<{ color: NgxColor; $event: Event }>();
    background: string;
    pointerTop: string;
    pointerLeft: string;

    ngOnChanges() {
        this.background = `hsl(${this.color.toHsl().h}, 100%, 50%)`;
        this.pointerTop = -(this.color.toHsv().v * 100) + 1 + 100 + '%';
        this.pointerLeft = this.color.toHsv().s * 100 + '%';
    }
    handleChange({ top, left, containerHeight, containerWidth, $event }) {
        const actualColorHsl = this.color.toHsl();
        if (left < 0) {
            left = 0;
        } else if (left > containerWidth) {
            left = containerWidth;
        } else if (top < 0) {
            top = 0;
        } else if (top > containerHeight) {
            top = containerHeight;
        }

        const saturation = left / containerWidth;
        let bright = -(top / containerHeight) + 1;
        bright = bright > 0 ? bright : 0;
        bright = bright > 1 ? 1 : bright;

        const data: HSVA = {
            h: actualColorHsl.h,
            s: saturation,
            v: bright,
            a: actualColorHsl.a
        };
        this.onChange.emit({ color: new NgxColor(data), $event });
    }
}
