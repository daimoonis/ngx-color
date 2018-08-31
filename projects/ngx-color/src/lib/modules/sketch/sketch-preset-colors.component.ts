import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    HostBinding,
    Input,
    Output,
    ViewEncapsulation
} from '@angular/core';
import { ColorEvent, NgxColor } from '@ngx-color-project/common';

@Component({
    selector: 'ngx-color-sketch-preset-colors',
    templateUrl: './sketch-preset-colors.component.html',
    styleUrls: ['./sketch-preset-colors.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class SketchPresetColorsComponent {
    @HostBinding('class.ngx-color-sketch-preset-colors')
    _hostClass = true;
    @Input() colors: NgxColor[];
    @Output() onClick = new EventEmitter<ColorEvent>();
    @Output() onSwatchHover = new EventEmitter<ColorEvent>();

    handleClick({ color, $event }) {
        this.onClick.emit({ color, $event });
    }

    focusStyle(color: NgxColor) {
        return {
            boxShadow: `inset 0 0 0 1px rgba(0,0,0,.15), 0 0 4px ${color.toRgbString()}`
        };
    }
}
