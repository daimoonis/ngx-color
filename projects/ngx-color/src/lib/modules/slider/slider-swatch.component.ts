import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
    HostBinding,
    ViewEncapsulation,
    ChangeDetectorRef,
} from '@angular/core';
import { NgxColor, HSL, ColorEvent } from '../../common/public_api';

@Component({
    selector: 'ngx-color-slider-swatch',
    templateUrl: './slider-swatch.component.html',
    styleUrls: ['./slider-swatch.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class SliderSwatchComponent {
    @HostBinding('class.ngx-color-slider-swatch')
    _hostClass = true;
    private _hsl: HSL;
    private _offset: number;
    private _color: NgxColor;
    @Input()
    get color(): NgxColor {
        return this._color;
    }
    set color(color: NgxColor) {
        this._color = color;
        this._hsl = this._color.toHsl();
        this.setBackground();
        this.changeDetectorRef.markForCheck();
    }
    @Input() active: boolean;
    @Input()
    get offset(): number {
        return this._offset;
    }
    set offset(offset: number) {
        this._offset = offset;
        this.setBackground();
        this.changeDetectorRef.markForCheck();
    }
    @Input() first = false;
    @Input() last = false;
    @Output() onClick = new EventEmitter<ColorEvent>();
    background: string;

    constructor(private changeDetectorRef: ChangeDetectorRef) { }

    setBackground() {
        this.background = `hsl(${this._hsl.h}, 50%, ${this._offset * 100}%)`;
    }

    handleClick($event) {
        this.onClick.emit({
            color: new NgxColor({
                h: this._hsl.h,
                s: 0.5,
                l: this.offset,
            }),
            $event
        });
    }
}
