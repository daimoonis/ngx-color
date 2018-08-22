import { ChangeDetectionStrategy, Component, Input, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'ngx-color-raised',
    templateUrl: './raised.component.html',
    styleUrls: ['./raised.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class RaisedComponent {
    @HostBinding('class')
    _hostClass = 'ngx-color-raised';
    @Input() zDepth: 0 | 1 | 2 | 3 | 4 | 5 = 1;
    @Input() radius = 1;
    @Input() background = '#fff';
}
