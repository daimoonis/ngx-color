import {
    ChangeDetectionStrategy,
    Component,
    Input,
    ViewEncapsulation,
    HostBinding,
    ChangeDetectorRef
} from '@angular/core';
import { ColorWrap } from '@ngx-color-project/common';

@Component({
    selector: 'ngx-color-alpha-picker',
    templateUrl: './alpha-picker.component.html',
    styleUrls: ['./alpha-picker.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class AlphaPickerComponent extends ColorWrap {
    @HostBinding('class')
    _hostClass = 'ngx-color-alpha-picker';
    _direction: 'horizontal' | 'vertical' = 'horizontal';
    /** Pixel value for picker width */
    @Input() width: string | number = 316;
    /** Pixel value for picker height */
    @Input() height: string | number = 16;
    @Input()
    get direction(): 'horizontal' | 'vertical' {
        return this._direction;
    }
    set direction(direction: 'horizontal' | 'vertical') {
        this._direction = direction || 'horizontal';
        if (this.direction === 'vertical') {
            this.pointer.transform = 'translate(-3px, -9px)';
            this.changeDetectorRef.markForCheck();
        }
    }
    pointer: { [key: string]: string } = {
        width: '18px',
        height: '18px',
        borderRadius: '50%',
        transform: 'translate(-9px, -2px)',
        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)',
    };

    constructor(changeDetectorRef: ChangeDetectorRef) {
        super(changeDetectorRef);
    }
}
