import {
    ChangeDetectionStrategy,
    Component,
    Input,
    HostBinding,
    ViewEncapsulation,
} from '@angular/core';
import {
    ColorWrap
} from '../../common/public_api';

@Component({
    selector: 'ngx-color-chrome',
    templateUrl: './chrome.component.html',
    styleUrls: ['./chrome.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class ChromeComponent extends ColorWrap {
    @HostBinding('class.ngx-color-chrome')
    _hostClass = true;
    /** Remove alpha slider and options from picker */
    @Input() disableAlpha = false;
    circle: { [key: string]: string } = {
        width: '12px',
        height: '12px',
        borderRadius: '6px',
        boxShadow: 'rgb(255, 255, 255) 0px 0px 0px 1px inset',
        transform: 'translate(-6px, -8px)',
    };
    pointer: { [key: string]: string } = {
        width: '12px',
        height: '12px',
        borderRadius: '6px',
        transform: 'translate(-6px, -2px)',
        backgroundColor: 'rgb(248, 248, 248)',
        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)',
    };

    handleValueChange({ color, $event }) {
        this.handleChange(color, $event);
    }
}
