import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectionStrategy, ViewEncapsulation, HostBinding } from '@angular/core';
import { Shape } from '../../common/public_api';

@Component({
    selector: 'ngx-color-block-swatches',
    templateUrl: './block-swatches.component.html',
    styleUrls: ['./block-swatches.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class BlockSwatchesComponent implements OnInit {
    @HostBinding('class.ngx-color-block-swatches')
    _hostClass = true;
    @Input() colors: string[] | Shape[];
    @Output() onClick = new EventEmitter<any>();
    @Output() onSwatchHover = new EventEmitter<any>();
    swatchStyle: { [key: string]: string };

    constructor() { }

    ngOnInit() {
        this.swatchStyle = {
            width: '22px',
            height: '22px',
            float: 'left',
            marginRight: '10px',
            marginBottom: '10px',
            borderRadius: '4px',
        };
    }
    handleClick({ hex, $event }) {
        this.onClick.emit({ hex, $event });
    }
    focusStyle(c) {
        return {
            boxShadow: `${c} 0 0 4px`,
        };
    }

}
