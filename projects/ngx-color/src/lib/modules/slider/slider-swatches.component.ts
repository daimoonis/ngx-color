import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
    HostBinding,
    ViewEncapsulation,
} from '@angular/core';
import { NgxColor, ColorEvent } from '../../common/public_api';

@Component({
    selector: 'ngx-color-slider-swatches',
    templateUrl: './slider-swatches.component.html',
    styleUrls: ['./slider-swatches.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class SliderSwatchesComponent {
    @HostBinding('class.ngx-color-slider-swatches')
    _hostClass = true;
    @Input() color: NgxColor;
    @Output() onClick = new EventEmitter<ColorEvent>();

    active(l: number, s: number) {
        const hsl = this.color.toHsl();
        return (
            Math.round(hsl.l * 100) / 100 === l &&
            Math.round(hsl.s * 100) / 100 === s
        );
    }

    handleClick({ color, $event }) {
        this.onClick.emit({ color, $event });
    }
}
