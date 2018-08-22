import {
    ChangeDetectionStrategy,
    Component,
    Input,
    HostBinding,
    ViewEncapsulation,
} from '@angular/core';
import {
    ColorWrap,
    getContrastingColor, isValidHex
} from '../../common';

@Component({
    selector: 'ngx-color-block',
    templateUrl: './block.component.html',
    styleUrls: ['./block.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class BlockComponent extends ColorWrap {
    @HostBinding('class')
    _hostClass = 'ngx-color-block';
    /** Pixel value for picker width */
    @Input() width: string | number = 170;
    /** Color squares to display */
    @Input() colors = [
        '#D9E3F0',
        '#F47373',
        '#697689',
        '#37D67A',
        '#2CCCE4',
        '#555555',
        '#dce775',
        '#ff8a65',
        '#ba68c8',
    ];
    @Input() triangle: 'top' | 'hide' = 'top';
    triangleBorderColor: string;
    input: { [key: string]: string } = {
        width: '100%',
        fontSize: '12px',
        color: '#666',
        border: '0px',
        outline: 'none',
        height: '22px',
        boxShadow: 'inset 0 0 0 1px #ddd',
        borderRadius: '4px',
        padding: '0 7px',
        boxSizing: 'border-box',
    };
    wrap: { [key: string]: string } = {
        position: 'relative',
        width: '100%',
    };

    constructor() {
        super();
    }

    handleValueChange({ data, $event }) {
        this.handleBlockChange({ hex: data, $event });
    }
    getContrastingColor(hex) {
        return getContrastingColor(hex);
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
