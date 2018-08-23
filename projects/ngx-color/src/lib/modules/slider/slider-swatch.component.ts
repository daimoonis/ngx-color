import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    Output,
    HostBinding,
    ViewEncapsulation,
} from '@angular/core';
import { HSL } from '../../common';

@Component({
    selector: 'ngx-color-slider-swatch',
    templateUrl: './slider-swatch.component.html',
    styleUrls: ['./slider-swatch.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class SliderSwatchComponent implements OnChanges {
    @HostBinding('class.ngx-color-slider-swatch')
    _hostClass = true;
    @Input() hsl: HSL;
    @Input() active: boolean;
    @Input() offset: number;
    @Input() first = false;
    @Input() last = false;
    @Output() onClick = new EventEmitter<any>();
    background: string;

    ngOnChanges() {
        this.background = `hsl(${this.hsl.h}, 50%, ${this.offset * 100}%)`;
    }
    handleClick($event) {
        this.onClick.emit({
            data: {
                h: this.hsl.h,
                s: 0.5,
                l: this.offset,
                source: 'hsl',
            },
            $event,
        });
    }
}
