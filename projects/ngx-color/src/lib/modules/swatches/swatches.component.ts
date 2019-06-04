import {
    ChangeDetectionStrategy,
    Component,
    Input,
    HostBinding,
    ViewEncapsulation,
    ChangeDetectorRef,
} from '@angular/core';
import { ColorInput } from '@ctrl/tinycolor';
import { ColorWrap, NgxColor, parseColors2 } from '../../common/public_api';
import { isNil } from 'lodash';

@Component({
    selector: 'ngx-color-swatches',
    templateUrl: './swatches.component.html',
    styleUrls: ['./swatches.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class SwatchesComponent extends ColorWrap {
    /**
     * Based on material palette colors, takes colors from palettes as these definitions from each:
     * 900, 700, 500, 300, 100
     */
    public static readonly DEFAULT_COLORS = [
        ['#b71c1c', '#d32f2f', '#f44336', '#e57373', '#ffcdd2'], // red
        ['#880e4f', '#c2185b', '#e91e63', '#f06292', '#f8bbd0'], // pink
        ['#4a148c', '#7b1fa2', '#9c27b0', '#ba68c8', '#e1bee7'], // purple
        ['#311b92', '#512da8', '#673ab7', '#9575cd', '#d1c4e9'], // deepPurple
        ['#1a237e', '#303f9f', '#3f51b5', '#7986cb', '#c5cae9'], // indigo
        ['#0d47a1', '#1976d2', '#2196f3', '#64b5f6', '#bbdefb'], // blue
        ['#01579b', '#0288d1', '#03a9f4', '#4fc3f7', '#b3e5fc'], // lightBlue
        ['#006064', '#0097a7', '#00bcd4', '#4dd0e1', '#b2ebf2'], // cyan
        ['#004d40', '#00796b', '#009688', '#4db6ac', '#b2dfdb'], // teal
        ['#194D33', '#388e3c', '#4caf50', '#81c784', '#c8e6c9'], // green
        ['#33691e', '#689f38', '#8bc34a', '#aed581', '#dcedc8'], // lightGreen
        ['#827717', '#afb42b', '#cddc39', '#dce775', '#f0f4c3'], // lime
        ['#f57f17', '#fbc02d', '#ffeb3b', '#fff176', '#fff9c4'], // yellow
        ['#ff6f00', '#ffa000', '#ffc107', '#ffd54f', '#ffecb3'], // amber
        ['#e65100', '#f57c00', '#ff9800', '#ffb74d', '#ffe0b2'], // orange
        ['#bf360c', '#e64a19', '#ff5722', '#ff8a65', '#ffccbc'], // deepOrange
        ['#3e2723', '#5d4037', '#795548', '#a1887f', '#d7ccc8'], // brown
        ['#263238', '#455a64', '#607d8b', '#90a4ae', '#cfd8dc'], // blueGrey
        ['#000000', '#525252', '#969696', '#D9D9D9', '#FFFFFF']  // grey
    ];

    @HostBinding('class.ngx-color-swatches')
    _hostClass = true;
    /** Pixel value for picker width */
    @Input() width: string | number = 320;
    /** Color squares to display */
    @Input() height: string | number = 240;
    /** An array of color groups, each with an array of colors */
    _colors: NgxColor[][];
    @Input()
    get colors(): ColorInput[][] {
        return this._colors;
    }
    set colors(colors: ColorInput[][]) {
        this._colors = !isNil(colors) ? parseColors2(colors) : parseColors2(SwatchesComponent.DEFAULT_COLORS);
    }

    constructor(changeDetectorRef: ChangeDetectorRef) {
        super(changeDetectorRef);
        this._colors = parseColors2(SwatchesComponent.DEFAULT_COLORS);
    }

    handlePickerChange({ color, $event }) {
        this.handleChange(color, $event);
    }
}
