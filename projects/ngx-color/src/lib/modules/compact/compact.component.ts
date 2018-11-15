import {
    ChangeDetectionStrategy,
    Component,
    Input,
    HostBinding,
    ViewEncapsulation,
    ChangeDetectorRef,
} from '@angular/core';
import { ColorWrap, parseColors, NgxColor } from '../../common/public_api';
import { ColorInput } from '@ctrl/tinycolor';
import { isNil } from 'lodash';

@Component({
    selector: 'ngx-color-compact',
    templateUrl: './compact.component.html',
    styleUrls: ['./compact.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class CompactComponent extends ColorWrap {
    public static readonly DEFAULT_COLORS = [
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

    @HostBinding('class.ngx-color-compact')
    _hostClass = true;
    _colors: NgxColor[];
    /** Color squares to display */
    @Input()
    get colors(): ColorInput[] {
        return this._colors;
    }
    set colors(colors: ColorInput[]) {
        this._colors = !isNil(colors) ? parseColors(colors) : parseColors(CompactComponent.DEFAULT_COLORS);
    }

    constructor(changeDetectorRef: ChangeDetectorRef) {
        super(changeDetectorRef);
        this._colors = parseColors(CompactComponent.DEFAULT_COLORS);
    }

    handleBlockChange({ color, $event }) {
        this.handleChange(color, $event);
    }

    handleValueChange({ color, $event }) {
        this.handleChange(color, $event);
    }
}
