import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
    ViewEncapsulation,
    HostBinding,
} from '@angular/core';
import { NgxColor, ColorEvent } from '@ngx-color-project/common';

@Component({
    selector: 'ngx-color-swatches-color',
    templateUrl: './swatches-color.component.html',
    styleUrls: ['./swatches-color.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class SwatchesColorComponent implements OnInit {
    @HostBinding('class.ngx-color-swatches-color')
    _hostClass = true;
    @Input() color: NgxColor;
    @Input() first = false;
    @Input() last = false;
    @Input() active: boolean;
    @Output() onClick = new EventEmitter<ColorEvent>();
    @Output() onSwatchHover = new EventEmitter<ColorEvent>();

    colorStyle: { [key: string]: string } = {};
    focusStyle: { [key: string]: string } = {};

    ngOnInit() {
        this.colorStyle.background = this.color.toRgbString();
        this.focusStyle.boxShadow = `0 0 4px ${this.color.toRgbString()}`;
        if (this.first) {
            this.colorStyle.borderRadius = '2px 2px 0 0';
        }
        if (this.last) {
            this.colorStyle.borderRadius = '0 0 2px 2px';
        }
    }
    handleClick($event) {
        this.onClick.emit({
            color: this.color,
            $event
        });
    }
}
