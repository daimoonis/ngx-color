import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
    ViewEncapsulation,
    HostBinding,
    ChangeDetectorRef,
} from '@angular/core';
import { ColorInput } from '@ctrl/tinycolor';
import { NgxColor, ColorEvent } from '../../common/public_api';

@Component({
    selector: 'ngx-color-swatches-group',
    templateUrl: './swatches-group.component.html',
    styleUrls: ['./swatches-group.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class SwatchesGroupComponent {
    @HostBinding('class.ngx-color-swatches-group')
    _hostClass = true;
    _active: NgxColor;
    @Input() group: NgxColor[];
    @Input()
    get active(): ColorInput {
        return this._active;
    }
    set active(colorInput: ColorInput) {
        const tinyColor = new NgxColor(colorInput);
        if (tinyColor.isValid) {
            this._active = tinyColor;
            this.changeDetectorRef.markForCheck();
        }
    }
    @Output() onClick = new EventEmitter<ColorEvent>();
    @Output() onSwatchHover = new EventEmitter<ColorEvent>();

    constructor(private changeDetectorRef: ChangeDetectorRef) { }
}
