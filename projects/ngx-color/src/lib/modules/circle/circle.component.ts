import {
    ChangeDetectionStrategy,
    Component,
    Input,
    HostBinding,
    ViewEncapsulation,
    ChangeDetectorRef,
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
import { ColorInput } from '@ctrl/tinycolor';
import { ColorWrap, NgxColor, parseColors } from '@ngx-color-project/common';
import { isNil } from 'lodash';

@Component({
    selector: 'ngx-color-circle',
    templateUrl: './circle.component.html',
    styleUrls: ['./circle.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class CircleComponent extends ColorWrap {
    public static readonly DEFAULT_COLORS = [
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
    @HostBinding('class.ngx-color-circle')
    _hostClass = true;
    /** Pixel value for picker width */
    @Input() width: string | number = 252;
    _colors: NgxColor[];
    /** Color squares to display */
    @Input()
    get colors(): ColorInput[] {
        return this._colors;
    }
    set colors(colors: ColorInput[]) {
        this._colors = !isNil(colors) ? parseColors(colors) : parseColors(CircleComponent.DEFAULT_COLORS);
    }
    /** Value for circle size */
    @Input() circleSize = 28;
    /** Value for spacing between circles */
    @Input() circleSpacing = 14;

    constructor(changeDetectorRef: ChangeDetectorRef) {
        super(changeDetectorRef);
        this._colors = parseColors(CircleComponent.DEFAULT_COLORS);
    }

    handleBlockChange(color: NgxColor, $event: Event) {
        this.handleChange(color, $event);
    }

    handleValueChange({ color, $event }) {
        this.handleChange(color, $event);
    }
}
