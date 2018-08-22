import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
    ViewEncapsulation,
    HostBinding,
} from '@angular/core';

@Component({
    selector: 'ngx-color-swatches-group',
    templateUrl: './swatches-group.component.html',
    styleUrls: ['./swatches-group.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class SwatchesGroupComponent {
    @HostBinding('class')
    _hostClass = 'ngx-color-swatches-group';
    @Input() group: string[];
    @Input() active: string;
    @Output() onClick = new EventEmitter<any>();
    @Output() onSwatchHover = new EventEmitter<any>();
}
