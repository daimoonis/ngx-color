import {
    ChangeDetectionStrategy,
    Component,
    Input,
    HostBinding,
    ViewEncapsulation,
} from '@angular/core';

import { ColorWrap } from '../../common/public_api';

@Component({
    selector: 'ngx-color-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class SliderComponent extends ColorWrap {
    @HostBinding('class.ngx-color-slider')
    _hostClass = true;
    @Input()
    pointer: { [key: string]: string } = {
        width: '14px',
        height: '14px',
        borderRadius: '6px',
        transform: 'translate(-7px, -2px)',
        backgroundColor: 'rgb(248, 248, 248)',
        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)',
    };
    @Input() radius = 2;

    constructor() {
        super();
    }

    handlePickerChange({ data, $event }) {
        this.handleChange(data, $event);
    }
}
