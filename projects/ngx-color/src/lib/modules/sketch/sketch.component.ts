import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    Input,
    ViewEncapsulation
} from '@angular/core';

import {
    ColorWrap
} from '../../common/public_api';
import { isValidHex } from '../../common/public_api';

@Component({
    selector: 'ngx-color-sketch',
    templateUrl: './sketch.component.html',
    styleUrls: ['./sketch.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class SketchComponent extends ColorWrap {
    @HostBinding('class.ngx-color-sketch')
    _hostClass = true;
    /** Remove alpha slider and options from picker */
    @Input() disableAlpha = false;
    /** Hex strings for default colors at bottom of picker */
    @Input() presetColors = [
        '#D0021B',
        '#F5A623',
        '#F8E71C',
        '#8B572A',
        '#7ED321',
        '#417505',
        '#BD10E0',
        '#9013FE',
        '#4A90E2',
        '#50E3C2',
        '#B8E986',
        '#000000',
        '#4A4A4A',
        '#9B9B9B',
        '#FFFFFF',
    ];
    /** Width of picker */
    @Input() width = 200;
    activeBackground: string;
    constructor() {
        super();
    }
    afterValidChange() {
        this.activeBackground = `rgba(${this.rgb.r}, ${this.rgb.g}, ${this.rgb.b}, ${this.rgb.a})`;
    }
    handleValueChange({ data, $event }) {
        this.handleChange(data, $event);
    }
    handleBlockChange({ hex, $event }) {
        if (isValidHex(hex)) {
            // this.hex = hex;
            this.handleChange(
                {
                    hex,
                    source: 'hex',
                },
                $event,
            );
        }
    }
}
