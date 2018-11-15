import {
    ChangeDetectionStrategy,
    Component,
    Input,
    HostBinding,
    ViewEncapsulation,
} from '@angular/core';
import { NgxColor } from '../../common/public_api';

@Component({
    selector: 'ngx-color-photoshop-previews',
    templateUrl: './photoshop-previews.component.html',
    styleUrls: ['./photoshop-previews.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class PhotoshopPreviewsComponent {
    @HostBinding('class.ngx-color-photoshop-previews')
    _hostClass = true;
    @Input() color: NgxColor;
    @Input() currentColor = '';
}
