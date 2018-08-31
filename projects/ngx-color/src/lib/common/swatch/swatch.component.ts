import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
    HostBinding,
    ViewEncapsulation,
} from '@angular/core';
import { ColorEvent, NgxColor } from '../helpers/public_api';

@Component({
    selector: 'ngx-color-swatch',
    templateUrl: './swatch.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class SwatchComponent implements OnInit {
    @HostBinding('class.ngx-color-swatch')
    _hostClass = true;
    @Input() color: NgxColor;
    @Input() style: { [key: string]: string } = {};
    @Input() focusStyle: { [key: string]: string } = {};
    @Input() focus: boolean;
    @Output() onClick = new EventEmitter<ColorEvent>();
    @Output() onHover = new EventEmitter<ColorEvent>();
    divStyles: { [key: string]: string } = {};
    focusStyles: { [key: string]: string } = {};
    inFocus = false;

    ngOnInit() {
        this.divStyles = {
            background: this.color.toRgbString(),
            height: '100%',
            width: '100%',
            cursor: 'pointer',
            position: 'relative',
            outline: 'none',
            ...this.style,
        };
        this.focusStyles = {
            ...this.divStyles,
            ...this.focusStyle,
        };
    }
    activeStyles() {
        return this.focus || this.inFocus ? this.focusStyles : this.divStyles;
    }
    handleFocusOut() {
        this.inFocus = false;
    }
    handleFocus() {
        this.inFocus = true;
    }
    handleHover(color, $event) {
        this.onHover.emit({ color, $event });
    }
    handleClick(color, $event) {
        this.onClick.emit({ color, $event });
    }
}
