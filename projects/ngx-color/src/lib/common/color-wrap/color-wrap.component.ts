import {
    Component,
    EventEmitter,
    Input,
    OnDestroy,
    OnInit,
    Output,
    ChangeDetectorRef,
} from '@angular/core';

import { Subscription, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { ColorInput } from '@ctrl/tinycolor';
import { NgxColor } from '../helpers/ngx-color';
import { ColorEvent } from '../helpers/public_api';

@Component({
    // create seletor base for test override property
    selector: 'ngx-color-wrap',
    template: ``,
})
export class ColorWrap implements OnInit, OnDestroy {
    /** hook for components when new color is set from outside */
    protected _afterOutsideColorSet = new Subject<void>();
    protected _destroyed = new Subject<void>();

    _color: NgxColor = new NgxColor({
        h: 250,
        s: 0.5,
        l: 0.2,
        a: 1,
    });
    @Input()
    get color(): ColorInput {
        return this._color;
    }
    set color(colorInput: ColorInput) {
        const tinyColor = new NgxColor(colorInput);
        if (tinyColor.isValid && !tinyColor.equals(this._color)) {
            this._color = tinyColor;
            this.changeDetectorRef.markForCheck();
            this._afterOutsideColorSet.next();
        }
    }
    @Output() onChange = new EventEmitter<ColorEvent>();
    @Output() onChangeComplete = new EventEmitter<ColorEvent>();
    @Output() onSwatchHover = new EventEmitter<ColorEvent>();
    changes: Subscription;

    constructor(protected changeDetectorRef: ChangeDetectorRef) { }

    ngOnInit() {
        this.changes = this.onChange.pipe(
            takeUntil(this._destroyed),
            debounceTime(100),
            distinctUntilChanged(),
        ).subscribe((x) => {
            this.onChangeComplete.emit(x);
        });
    }

    ngOnDestroy() {
        this._destroyed.next();
        this._destroyed.complete();
    }

    handleChange(color: NgxColor, $event?: Event) {
        if (color.isValid) {
            this._color = color;
            this.onChange.emit({ color, $event });
        }
    }

    handleSwatchHover(color: NgxColor, $event) {
        if (color.isValid) {
            this._color = color;
            this.onSwatchHover.emit({ color, $event });
        }
    }
}
