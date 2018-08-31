import {
    ChangeDetectionStrategy,
    Component,
    Input,
    HostBinding,
    ViewEncapsulation,
    ChangeDetectorRef
} from '@angular/core';

import { ColorWrap, NgxColor } from '@ngx-color-project/common';

@Component({
    selector: 'ngx-color-hue-picker',
    templateUrl: './hue-picker.component.html',
    styleUrls: ['./hue-picker.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class HuePickerComponent extends ColorWrap {
    @HostBinding('class.ngx-color-hue-picker')
    _hostClass = true;

    _direction: 'horizontal' | 'vertical' = 'horizontal';
    _hue: number;
    pointer: { [key: string]: string } = {
        width: '18px',
        height: '18px',
        borderRadius: '50%',
        transform: 'translate(-9px, -2px)',
        backgroundColor: 'rgb(248, 248, 248)',
        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)',
    };

    /** Pixel value for picker width */
    @Input() width: string | number = 316;
    /** Pixel value for picker height */
    @Input() height: string | number = 16;
    @Input() radius = 2;
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

    constructor(changeDetectorRef: ChangeDetectorRef) {
        super(changeDetectorRef);
    }

    newColorSet(color: NgxColor) {
        this._hue = color.toHsl().h;
    }

    handlePickerChange(color: NgxColor) {
        this.handleChange(color);
    }
}
