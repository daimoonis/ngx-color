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
    selector: 'ngx-color-github',
    templateUrl: './github.component.html',
    styleUrls: ['./github.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class GithubComponent extends ColorWrap {
    public static readonly DEFAULT_COLORS = [
        '#B80000',
        '#DB3E00',
        '#FCCB00',
        '#008B02',
        '#006B76',
        '#1273DE',
        '#004DCF',
        '#5300EB',
        '#EB9694',
        '#FAD0C3',
        '#FEF3BD',
        '#C1E1C5',
        '#BEDADC',
        '#C4DEF6',
        '#BED3F3',
        '#D4C4FB',
    ];

    @HostBinding('class.ngx-color-github')
    _hostClass = true;
    _colors: NgxColor[];
    /** Pixel value for picker width */
    @Input() width: string | number = 212;
    /** Color squares to display */
    @Input()
    get colors(): ColorInput[] {
        return this._colors;
    }
    set colors(colors: ColorInput[]) {
        this._colors = !isNil(colors) ? parseColors(colors) : parseColors(GithubComponent.DEFAULT_COLORS);
    }
    @Input() triangle: 'hide' | 'top-left' | 'top-right' | 'bottom-right' = 'top-left';

    constructor(changeDetectorRef: ChangeDetectorRef) {
        super(changeDetectorRef);
        this._colors = parseColors(GithubComponent.DEFAULT_COLORS);
    }

    handleBlockChange({ color, $event }) {
        this.handleChange(color, $event);
    }

    handleValueChange({ color, $event }) {
        this.handleChange(color, $event);
    }
}
