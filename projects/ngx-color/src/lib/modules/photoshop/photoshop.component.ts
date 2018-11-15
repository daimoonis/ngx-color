import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
    ViewEncapsulation,
    HostBinding,
    OnInit,
} from '@angular/core';
import {
    ColorWrap,
} from '../../common/public_api';

@Component({
    selector: 'ngx-color-photoshop',
    templateUrl: './photoshop.component.html',
    styleUrls: ['./photoshop.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class PhotoshopComponent extends ColorWrap implements OnInit {
    @HostBinding('class.ngx-color-photoshop')
    _hostClass = true;
    _currentColorRgb: string;
    /** Title text */
    @Input() header = 'Color Picker';
    @Output() onAccept = new EventEmitter<Event>();
    @Output() onCancel = new EventEmitter<Event>();
    circle = {
        width: '12px',
        height: '12px',
        borderRadius: '6px',
        boxShadow: 'rgb(255, 255, 255) 0px 0px 0px 1px inset',
        transform: 'translate(-6px, -10px)',
    };

    ngOnInit() {
        super.ngOnInit();
        this._currentColorRgb = this._color.toRgbString();
    }

    handleValueChange({ color, $event }) {
        this.handleChange(color, $event);
    }
}
