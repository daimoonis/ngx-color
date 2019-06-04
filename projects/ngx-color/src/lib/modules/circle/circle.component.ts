import {
    ChangeDetectionStrategy,
    Component,
    Input,
    HostBinding,
    ViewEncapsulation,
    ChangeDetectorRef,
} from '@angular/core';

import { ColorInput } from '@ctrl/tinycolor';
import { ColorWrap, NgxColor, parseColors } from '../../common/public_api';
import { isNil } from 'lodash';

@Component({
    selector: 'ngx-color-circle',
    templateUrl: './circle.component.html',
    styleUrls: ['./circle.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class CircleComponent extends ColorWrap {
    /**
     * Colors taken from material-colors palettes:
     */
    public static readonly DEFAULT_COLORS = [
        '#f44336', // red['500']
        '#e91e63', // pink['500']
        '#9c27b0', // purple['500']
        '#673ab7', // deepPurple['500']
        '#3f51b5', // indigo['500']
        '#2196f3', // blue['500']
        '#03a9f4', // lightBlue['500']
        '#00bcd4', // cyan['500']
        '#009688', // teal['500']
        '#4caf50', // green['500']
        '#8bc34a', // lightGreen['500']
        '#cddc39', // lime['500']
        '#ffeb3b', // yellow['500']
        '#ffc107', // amber['500']
        '#ff9800', // orange['500']
        '#ff5722', // deepOrange['500']
        '#795548', // brown['500']
        '#607d8b'  // blueGrey['500']
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
