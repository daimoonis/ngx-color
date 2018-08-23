import {
    ChangeDetectionStrategy,
    Component,
    Input,
    HostBinding,
    ViewEncapsulation,
} from '@angular/core';
import { ColorWrap, isValidHex } from '../../common/public_api';

@Component({
    selector: 'ngx-color-github',
    templateUrl: './github.component.html',
    styleUrls: ['./github.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class GithubComponent extends ColorWrap {
    @HostBinding('class.ngx-color-github')
    _hostClass = true;
    /** Pixel value for picker width */
    @Input() width: string | number = 212;
    /** Color squares to display */
    @Input() colors = [
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
    @Input() triangle: 'hide' | 'top-left' | 'top-right' | 'bottom-right' = 'top-left';

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
