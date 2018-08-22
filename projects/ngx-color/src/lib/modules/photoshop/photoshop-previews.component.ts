import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnChanges,
    HostBinding,
    ViewEncapsulation,
} from '@angular/core';
import { RGB } from '../../common';

@Component({
    selector: 'ngx-color-photoshop-previews',
    templateUrl: './photoshop-previews.component.html',
    styleUrls: ['./photoshop-previews.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class PhotoshopPreviewsComponent implements OnChanges {
    @HostBinding('class')
    _hostClass = 'ngx-color-photoshop-previews';
    @Input() rgb: RGB;
    @Input() currentColor = '';
    backgroundNew = '';

    ngOnChanges() {
        this.backgroundNew = `rgb(${this.rgb.r},${this.rgb.g}, ${this.rgb.b})`;
    }
}
