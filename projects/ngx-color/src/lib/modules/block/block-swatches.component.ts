import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy, ViewEncapsulation, HostBinding } from '@angular/core';
import { ColorEvent, NgxColor } from '../../common/public_api';

@Component({
    selector: 'ngx-color-block-swatches',
    templateUrl: './block-swatches.component.html',
    styleUrls: ['./block-swatches.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class BlockSwatchesComponent {
    @HostBinding('class.ngx-color-block-swatches')
    _hostClass = true;
    @Input() colors: NgxColor[];
    @Output() onClick = new EventEmitter<ColorEvent>();
    @Output() onSwatchHover = new EventEmitter<ColorEvent>();

    handleClick({ color, $event }) {
        this.onClick.emit({ color, $event });
    }
    focusStyle(c) {
        return {
            boxShadow: `${c} 0 0 4px`,
        };
    }

}
