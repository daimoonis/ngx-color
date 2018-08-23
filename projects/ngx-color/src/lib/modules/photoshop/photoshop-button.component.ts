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
    selector: 'ngx-color-photoshop-button',
    templateUrl: './photoshop-button.component.html',
    styleUrls: ['./photoshop-button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class PhotoshopButtonComponent {
    @HostBinding('class.ngx-color-photoshop-button')
    _hostClass = true;
    @Input() label = '';
    @Input() active = false;
    @Output() click = new EventEmitter<Event>();
}
