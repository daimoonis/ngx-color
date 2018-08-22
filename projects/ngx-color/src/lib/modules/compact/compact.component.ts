import {
    ChangeDetectionStrategy,
    Component,
    Input,
    HostBinding,
    ViewEncapsulation,
} from '@angular/core';

import {
    ColorWrap,
    isValidHex
} from '../../common';

@Component({
    selector: 'ngx-color-compact',
    templateUrl: './compact.component.html',
    styleUrls: ['./compact.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class CompactComponent extends ColorWrap {
    @HostBinding('class')
    _hostClass = 'ngx-color-compact';
    /** Color squares to display */
    @Input() colors = [
        '#4D4D4D',
        '#999999',
        '#FFFFFF',
        '#F44E3B',
        '#FE9200',
        '#FCDC00',
        '#DBDF00',
        '#A4DD00',
        '#68CCCA',
        '#73D8FF',
        '#AEA1FF',
        '#FDA1FF',
        '#333333',
        '#808080',
        '#cccccc',
        '#D33115',
        '#E27300',
        '#FCC400',
        '#B0BC00',
        '#68BC00',
        '#16A5A5',
        '#009CE0',
        '#7B64FF',
        '#FA28FF',
        '#000000',
        '#666666',
        '#B3B3B3',
        '#9F0500',
        '#C45100',
        '#FB9E00',
        '#808900',
        '#194D33',
        '#0C797D',
        '#0062B1',
        '#653294',
        '#AB149E',
    ];

    constructor() {
        super();
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
