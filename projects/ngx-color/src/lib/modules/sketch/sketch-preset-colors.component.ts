import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    HostBinding,
    Input,
    Output,
    ViewEncapsulation
} from '@angular/core';

import { Shape } from '../../common';

@Component({
    selector: 'ngx-color-sketch-preset-colors',
    templateUrl: './sketch-preset-colors.component.html',
    styleUrls: ['./sketch-preset-colors.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    preserveWhitespaces: false,
})
export class SketchPresetColorsComponent {
    @HostBinding('class')
    _hostClass = 'ngx-color-sketch-preset-colors';
    @Input() colors: string[] | Shape[];
    @Output() onClick = new EventEmitter<any>();
    @Output() onSwatchHover = new EventEmitter<any>();
    swatchStyle = {
        borderRadius: '3px',
        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15)',
    };

    handleClick({ hex, $event }) {
        this.onClick.emit({ hex, $event });
    }
    normalizeValue(val: string | Shape) {
        if (typeof val === 'string') {
            return { color: val };
        }
        return val;
    }
    focusStyle(val: string | Shape) {
        const c = this.normalizeValue(val);
        return {
            boxShadow: `inset 0 0 0 1px rgba(0,0,0,.15), 0 0 4px ${c.color}`,
        };
    }
}
