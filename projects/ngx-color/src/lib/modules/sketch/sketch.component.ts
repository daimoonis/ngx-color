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
    public static DEFAULT_PRESET_COLORS = [
        '#D0021B',
        '#F5A623',
        '#F8E71C',
        '#8B572A',
        '#7ED321',
        '#417505',
        '#BD10E0',
        '#9013FE',
        '#4A90E2',
        '#50E3C2',
        '#B8E986',
        '#000000',
        '#4A4A4A',
        '#9B9B9B',
        '#FFFFFF'
    ];
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
        this._presetColors = !isNil(colors) ? parseColors(colors) : parseColors(SketchComponent.DEFAULT_PRESET_COLORS);
    }

    constructor(changeDetectorRef: ChangeDetectorRef) {
        super(changeDetectorRef);
        this._presetColors = parseColors(SketchComponent.DEFAULT_PRESET_COLORS);
    }

    handleValueChange({ color, $event }) {
        this.handleChange(color, $event);
    }

    handleBlockChange({ color, $event }) {
        this.handleChange(color, $event);

    }
}
