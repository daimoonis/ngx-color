import {
    ChangeDetectionStrategy,
    Component,
    Input,
    HostBinding,
    ViewEncapsulation,
} from '@angular/core';
import { ColorWrap } from '@ngx-color-project/common';

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
    @Input() radius = 2;

    handlePickerChange({ color, $event }) {
        this.handleChange(color, $event);
    }
}
