import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
    HostBinding,
    ViewEncapsulation,
} from '@angular/core';
import { NgxColor, ColorEvent } from '@ngx-color-project/common';

@Component({
    selector: 'ngx-color-github-swatch',
    templateUrl: './github-swatch.component.html',
    styleUrls: ['./github-swatch.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class GithubSwatchComponent {
    @HostBinding('class.ngx-color-github-swatch')
    _hostClass = true;
    @Input() color: NgxColor;
    @Output() onClick = new EventEmitter<ColorEvent>();
    @Output() onSwatchHover = new EventEmitter<ColorEvent>();

    handleClick({ color, $event }) {
        this.onClick.emit({ color, $event });
    }
}
