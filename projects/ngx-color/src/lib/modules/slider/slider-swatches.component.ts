import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
    HostBinding,
    ViewEncapsulation,
} from '@angular/core';
import { HSL } from '../../common/public_api';

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
    @Input() hsl: HSL;
    @Output() onClick = new EventEmitter<any>();
    @Output() onSwatchHover = new EventEmitter<any>();
    swatchStyle: { [key: string]: string };

    active(l: number, s: number) {
        return (
            Math.round(this.hsl.l * 100) / 100 === l &&
            Math.round(this.hsl.s * 100) / 100 === s
        );
    }
    handleClick({ data, $event }) {
        this.onClick.emit({ data, $event });
    }
}
