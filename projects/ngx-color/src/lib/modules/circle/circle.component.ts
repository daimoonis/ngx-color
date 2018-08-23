import {
    ChangeDetectionStrategy,
    Component,
    Input,
    HostBinding,
    ViewEncapsulation,
} from '@angular/core';
import {
    amber,
    blue,
    blueGrey,
    brown,
    cyan,
    deepOrange,
    deepPurple,
    green,
    indigo,
    lightBlue,
    lightGreen,
    lime,
    orange,
    pink,
    purple,
    red,
    teal,
    yellow,
} from 'material-colors';
import { ColorWrap, isValidHex } from '../../common';

@Component({
    selector: 'ngx-color-circle',
    templateUrl: './circle.component.html',
    styleUrls: ['./circle.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class CircleComponent extends ColorWrap {
    @HostBinding('class.ngx-color-circle')
    _hostClass = true;
    /** Pixel value for picker width */
    @Input() width: string | number = 252;
    /** Color squares to display */
    @Input()
    colors: string[] = [
        red['500'],
        pink['500'],
        purple['500'],
        deepPurple['500'],
        indigo['500'],
        blue['500'],
        lightBlue['500'],
        cyan['500'],
        teal['500'],
        green['500'],
        lightGreen['500'],
        lime['500'],
        yellow['500'],
        amber['500'],
        orange['500'],
        deepOrange['500'],
        brown['500'],
        blueGrey['500'],
    ];
    /** Value for circle size */
    @Input() circleSize = 28;
    /** Value for spacing between circles */
    @Input() circleSpacing = 14;

    constructor() {
        super();
    }
    isActive(color) {
        return this.hex === color;
    }
    handleBlockChange({ hex, $event }) {
        if (isValidHex(hex)) {
            this.handleChange({ hex, source: 'hex' }, $event);
        }
    }
    handleValueChange({ data, $event }) {
        this.handleChange(data, $event);
    }
}
