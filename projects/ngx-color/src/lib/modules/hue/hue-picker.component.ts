import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnChanges,
    HostBinding,
    ViewEncapsulation,
} from '@angular/core';
import { ColorWrap, toState } from '../../common';

@Component({
    selector: 'ngx-color-hue-picker',
    templateUrl: './hue-picker.component.html',
    styleUrls: ['./hue-picker.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class HuePickerComponent extends ColorWrap implements OnChanges {
    @HostBinding('class.ngx-color-hue-picker')
    _hostClass = true;
    /** Pixel value for picker width */
    @Input() width: string | number = 316;
    /** Pixel value for picker height */
    @Input() height: string | number = 16;
    @Input() radius = 2;
    @Input() direction: 'horizontal' | 'vertical' = 'horizontal';
    pointer: { [key: string]: string } = {
        width: '18px',
        height: '18px',
        borderRadius: '50%',
        transform: 'translate(-9px, -2px)',
        backgroundColor: 'rgb(248, 248, 248)',
        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)',
    };

    constructor() {
        super();
    }

    ngOnChanges() {
        if (this.direction === 'vertical') {
            this.pointer.transform = 'translate(-3px, -9px)';
        }
        this.setState(toState(this.color, this.oldHue));
    }
    handlePickerChange({ data, $event }) {
        this.handleChange({ a: 1, h: data.h, l: 0.5, s: 1 }, $event);
    }
}
