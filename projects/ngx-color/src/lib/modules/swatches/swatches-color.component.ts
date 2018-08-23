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
import { getContrastingColor } from '../../common/public_api';

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
    @Input() color: string;
    @Input() first = false;
    @Input() last = false;
    @Input() active: boolean;
    @Output() onClick = new EventEmitter<any>();
    @Output() onSwatchHover = new EventEmitter<any>();
    getContrastingColor = getContrastingColor;
    colorStyle: { [key: string]: string } = {
        width: '40px',
        height: '24px',
        cursor: 'pointer',
        marginBottom: '1px',
    };
    focusStyle: { [key: string]: string } = {};

    ngOnInit() {
        this.colorStyle.background = this.color;
        this.focusStyle.boxShadow = `0 0 4px ${this.color}`;
        if (this.first) {
            this.colorStyle.borderRadius = '2px 2px 0 0';
        }
        if (this.last) {
            this.colorStyle.borderRadius = '0 0 2px 2px';
        }
        if (this.color === '#FFFFFF') {
            this.colorStyle.boxShadow = 'inset 0 0 0 1px #ddd';
        }
    }
    handleClick($event) {
        this.onClick.emit({
            data: {
                hex: this.color,
                source: 'hex',
            },
            $event,
        });
    }
}
