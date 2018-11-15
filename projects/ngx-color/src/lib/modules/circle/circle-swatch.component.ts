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
import { ColorEvent, NgxColor } from '../../common/public_api';

@Component({
    selector: 'ngx-color-circle-swatch',
    templateUrl: './circle-swatch.component.html',
    styleUrls: ['./circle-swatch.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class CircleSwatchComponent implements OnChanges {
    @HostBinding('class.ngx-color-circle-swatch')
    _hostClass = true;
    @Input() color: NgxColor;
    @Input() circleSize = 28;
    @Input() circleSpacing = 14;
    @Input() focus = false;
    @Output() onClick = new EventEmitter<ColorEvent>();
    @Output() onSwatchHover = new EventEmitter<any>();
    focusStyle: { [key: string]: string };
    swatchStyle: { [key: string]: string } = {
        borderRadius: '50%',
        background: 'transparent',
        transition: '100ms box-shadow ease',
    };

    ngOnChanges() {
        this.focusStyle = {
            boxShadow: `${this.color} 0px 0px 0px 3px inset`,
        };
        this.swatchStyle.boxShadow = `inset 0 0 0 ${this.circleSize / 2}px ${this.color.toRgbString()}`;
    }

    handleClick({ color, $event }) {
        this.onClick.emit({ color, $event });
    }
}
