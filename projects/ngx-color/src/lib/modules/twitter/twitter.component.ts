import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation, HostBinding } from '@angular/core';
import { ColorWrap, isValidHex } from '../../common';

@Component({
    selector: 'ngx-color-twitter',
    templateUrl: './twitter.component.html',
    styleUrls: ['./twitter.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class TwitterComponent extends ColorWrap {
    @HostBinding('class')
    _hostClass = 'ngx-color-twitter';
    /** Pixel value for picker width */
    @Input() width: string | number = 276;
    /** Color squares to display */
    @Input() colors = [
        '#FF6900',
        '#FCB900',
        '#7BDCB5',
        '#00D084',
        '#8ED1FC',
        '#0693E3',
        '#ABB8C3',
        '#EB144C',
        '#F78DA7',
        '#9900EF',
    ];
    @Input() triangle: 'hide' | 'top-left' | 'top-right' | 'bottom-right' = 'top-left';

    swatchStyle: { [key: string]: string } = {
        width: '30px',
        height: '30px',
        borderRadius: '4px',
        fontSize: '0',
    };
    input: { [key: string]: string } = {
        borderRadius: '4px',
        borderBottomLeftRadius: '0',
        borderTopLeftRadius: '0',
        border: '1px solid #e6ecf0',
        boxSizing: 'border-box',
        display: 'inline',
        fontSize: '14px',
        height: '30px',
        padding: '0',
        paddingLeft: '6px',
        width: '100%',
        color: '#657786',
    };

    constructor() {
        super();
    }

    focus(color: string) {
        return { boxShadow: `0 0 4px ${color}` };
    }

    handleBlockChange({ hex, $event }) {
        if (isValidHex(hex)) {
            this.handleChange({ hex, source: 'hex' }, $event);
        }
    }

    handleValueChange({ data, $event }) {
        this.handleBlockChange({ hex: data, $event });
    }
}
