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
import { ColorWrap } from '../../common';

@Component({
    selector: 'ngx-color-swatches',
    templateUrl: './swatches.component.html',
    styleUrls: ['./swatches.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class SwatchesComponent extends ColorWrap {
    @HostBinding('class')
    _hostClass = 'ngx-color-swatches';
    /** Pixel value for picker width */
    @Input() width: string | number = 320;
    /** Color squares to display */
    @Input() height: string | number = 240;
    /** An array of color groups, each with an array of colors */
    @Input()
    colors: string[][] = [
        [
            red['900'],
            red['700'],
            red['500'],
            red['300'],
            red['100'],
        ],
        [
            pink['900'],
            pink['700'],
            pink['500'],
            pink['300'],
            pink['100'],
        ],
        [
            purple['900'],
            purple['700'],
            purple['500'],
            purple['300'],
            purple['100'],
        ],
        [
            deepPurple['900'],
            deepPurple['700'],
            deepPurple['500'],
            deepPurple['300'],
            deepPurple['100'],
        ],
        [
            indigo['900'],
            indigo['700'],
            indigo['500'],
            indigo['300'],
            indigo['100'],
        ],
        [
            blue['900'],
            blue['700'],
            blue['500'],
            blue['300'],
            blue['100'],
        ],
        [
            lightBlue['900'],
            lightBlue['700'],
            lightBlue['500'],
            lightBlue['300'],
            lightBlue['100'],
        ],
        [
            cyan['900'],
            cyan['700'],
            cyan['500'],
            cyan['300'],
            cyan['100'],
        ],
        [
            teal['900'],
            teal['700'],
            teal['500'],
            teal['300'],
            teal['100'],
        ],
        [
            '#194D33',
            green['700'],
            green['500'],
            green['300'],
            green['100'],
        ],
        [
            lightGreen['900'],
            lightGreen['700'],
            lightGreen['500'],
            lightGreen['300'],
            lightGreen['100'],
        ],
        [
            lime['900'],
            lime['700'],
            lime['500'],
            lime['300'],
            lime['100'],
        ],
        [
            yellow['900'],
            yellow['700'],
            yellow['500'],
            yellow['300'],
            yellow['100'],
        ],
        [
            amber['900'],
            amber['700'],
            amber['500'],
            amber['300'],
            amber['100'],
        ],
        [
            orange['900'],
            orange['700'],
            orange['500'],
            orange['300'],
            orange['100'],
        ],
        [
            deepOrange['900'],
            deepOrange['700'],
            deepOrange['500'],
            deepOrange['300'],
            deepOrange['100'],
        ],
        [
            brown['900'],
            brown['700'],
            brown['500'],
            brown['300'],
            brown['100'],
        ],
        [
            blueGrey['900'],
            blueGrey['700'],
            blueGrey['500'],
            blueGrey['300'],
            blueGrey['100'],
        ],
        ['#000000', '#525252', '#969696', '#D9D9D9', '#FFFFFF'],
    ];
    constructor() {
        super();
    }
    handlePickerChange({ data, $event }) {
        this.handleChange(data, $event);
    }
}
