import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    Output,
    HostBinding,
    ViewEncapsulation
} from '@angular/core';
import { NgxColor, ColorEvent } from '@ngx-color-project/common';

@Component({
    selector: 'ngx-color-compact-color',
    templateUrl: './compact-color.component.html',
    styleUrls: ['./compact-color.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class CompactColorComponent implements OnChanges {
    @HostBinding('class.ngx-color-compact-color')
    _hostClass = true;
    @Input() color: NgxColor;
    @Input() active: boolean;
    @Output() onClick = new EventEmitter<ColorEvent>();
    @Output() onSwatchHover = new EventEmitter<ColorEvent>();
    swatchStyle: { [key: string]: string } = {};
    swatchFocus: { [key: string]: string } = {};

    ngOnChanges() {
        this.swatchStyle.background = this.color.toRgbString();
        this.swatchFocus.boxShadow = `0 0 4px ${this.color}`;
    }
    handleClick({ color, $event }) {
        this.onClick.emit({ color, $event });
    }
}
