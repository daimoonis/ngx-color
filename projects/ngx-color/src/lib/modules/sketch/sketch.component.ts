import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    Input,
    ViewEncapsulation,
    ChangeDetectorRef
} from '@angular/core';
import { ColorWrap, parseColors, NgxColor } from '@ngx-color-project/common';
import { ColorInput } from '@ctrl/tinycolor';
import { isNil } from 'lodash';

@Component({
    selector: 'ngx-color-sketch',
    templateUrl: './sketch.component.html',
    styleUrls: ['./sketch.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class SketchComponent extends ColorWrap {
    @HostBinding('class.ngx-color-sketch')
    _hostClass = true;
    _presetColors: NgxColor[];
    /** Remove alpha slider and options from picker */
    @Input() disableAlpha = false;
    /** Colors as default colors at bottom of picker */
    @Input()
    get presetColors(): ColorInput[] {
        return this._presetColors;
    }
    set presetColors(colors: ColorInput[]) {
        this._presetColors = !isNil(colors) ? parseColors(colors) : [];
    }

    constructor(changeDetectorRef: ChangeDetectorRef) {
        super(changeDetectorRef);
        this._presetColors = [];
    }

    handleValueChange({ color, $event }) {
        this.handleChange(color, $event);
    }

    handleBlockChange({ color, $event }) {
        this.handleChange(color, $event);

    }
}
