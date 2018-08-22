import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnChanges,
    ViewEncapsulation,
    HostBinding,
} from '@angular/core';
import { ColorWrap, toState } from '../../common';

@Component({
    selector: 'ngx-color-alpha-picker',
    templateUrl: './alpha-picker.component.html',
    styleUrls: ['./alpha-picker.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class AlphaPickerComponent extends ColorWrap implements OnChanges {
    @HostBinding('class')
    _hostClass = 'ngx-color-alpha-picker';
    /** Pixel value for picker width */
    @Input() width: string | number = 316;
    /** Pixel value for picker height */
    @Input() height: string | number = 16;
    @Input() direction: 'horizontal' | 'vertical' = 'horizontal';
    pointer: { [key: string]: string } = {
        width: '18px',
        height: '18px',
        borderRadius: '50%',
        transform: 'translate(-9px, -2px)',
        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)',
    };

    constructor() {
        super();
    }
    ngOnChanges() {
        if (this.direction === 'vertical') {
            this.pointer.transform = 'translate(-3px, -9px)';
        }
        this.setState(toState(this.color, this.oldHue));
    }
    handlePickerChange({ data, $event }) {
        this.handleChange(data, $event);
    }
}
