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

import { getContrastingColor } from '../../common/public_api';

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
    @Input() color: string;
    @Input() active: boolean;
    @Output() onClick = new EventEmitter<any>();
    @Output() onSwatchHover = new EventEmitter<any>();
    swatchStyle: { [key: string]: string } = {
        width: '15px',
        height: '15px',
        float: 'left',
        marginRight: '5px',
        marginBottom: '5px',
        position: 'relative',
        cursor: 'pointer',
    };
    swatchFocus: { [key: string]: string } = {};
    getContrastingColor = getContrastingColor;

    ngOnChanges() {
        this.swatchStyle.background = this.color;
        this.swatchFocus.boxShadow = `0 0 4px ${this.color}`;
        if (this.color.toLowerCase() === '#ffffff') {
            this.swatchStyle.boxShadow = 'inset 0 0 0 1px #ddd';
        }
    }
    handleClick({ hex, $event }) {
        this.onClick.emit({ hex, $event });
    }
}
