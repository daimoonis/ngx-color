import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
    HostBinding,
    ViewEncapsulation,
} from '@angular/core';

@Component({
    selector: 'ngx-color-github-swatch',
    templateUrl: './github-swatch.component.html',
    styleUrls: ['./github-swatch.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class GithubSwatchComponent {
    @HostBinding('class')
    _hostClass = 'ngx-color-github-swatch';
    @Input() color: string;
    @Output() onClick = new EventEmitter<any>();
    @Output() onSwatchHover = new EventEmitter<any>();
    swatchStyle: { [key: string]: string };

    constructor() { }

    handleClick({ hex, $event }) {
        this.onClick.emit({ hex, $event });
    }
}
