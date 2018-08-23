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

@Component({
    selector: 'ngx-color-swatch',
    templateUrl: './swatch.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class SwatchComponent implements OnInit {
    @HostBinding('class.ngx-color-swatch')
    _hostClass = true;
    @Input() color;
    @Input() style: { [key: string]: string } = {};
    @Input() focusStyle: { [key: string]: string } = {};
    @Input() focus: boolean;
    @Output() onClick = new EventEmitter<{ hex: string, $event: Event }>();
    @Output() onHover = new EventEmitter<{ hex: string, $event: Event }>();
    divStyles: { [key: string]: string } = {};
    focusStyles: { [key: string]: string } = {};
    inFocus = false;

    ngOnInit() {
        this.divStyles = {
            background: this.color,
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
    handleHover(hex, $event) {
        this.onHover.emit({ hex, $event });
    }
    handleClick(hex, $event) {
        this.onClick.emit({ hex, $event });
    }
}
