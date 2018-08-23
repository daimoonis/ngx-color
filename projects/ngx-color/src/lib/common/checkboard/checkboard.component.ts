import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
    ViewEncapsulation,
    HostBinding,
} from '@angular/core';

import { getCheckerboard } from '../helpers/checkboard';

@Component({
    selector: 'ngx-color-checkboard',
    templateUrl: './checkboard.component.html',
    styleUrls: ['./checkboard.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class CheckboardComponent implements OnInit {
    @HostBinding('class.ngx-color-checkboard')
    _hostClass = true;
    @Input() white = 'transparent';
    @Input() size = 8;
    @Input() grey = 'rgba(0,0,0,.08)';
    @Input() boxShadow: string;
    @Input() borderRadius: string;
    gridStyles: { [key: string]: string };

    ngOnInit() {
        const background = getCheckerboard(this.white, this.grey, this.size);
        this.gridStyles = {
            borderRadius: this.borderRadius,
            boxShadow: this.boxShadow,
            background: `url(${background}) center left`,
        };
    }
}
