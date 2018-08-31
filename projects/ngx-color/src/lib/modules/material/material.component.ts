import { ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation } from '@angular/core';
import { ColorWrap, NgxColor } from '@ngx-color-project/common';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
    selector: 'ngx-color-material',
    templateUrl: './material.component.html',
    styleUrls: ['./material.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class MaterialComponent extends ColorWrap {
    @HostBinding('class.ngx-color-material')
    _hostClass = true;
    _destroyed = new Subject<void>();

    HEXinput: { [key: string]: string } = {};

    handleValueChange({ data, $event }) {
        const newColor = new NgxColor(data.hex);
        this.handleChange(newColor);
        if (newColor.isValid) {
            this.HEXinput['border-bottom-color'] = newColor.toRgbString();
        }
    }

    handleInputChange({ data, $event }) {
        let newColor: NgxColor;
        if (data.hex) {
            newColor = new NgxColor(data.hex);
        } else if (data.r || data.g || data.b) {
            newColor = new NgxColor({
                r: data.r || this._color.r,
                g: data.g || this._color.g,
                b: data.b || this._color.b
            });
        }

        if (newColor && newColor.isValid) {
            this.handleChange(newColor);
            this.HEXinput['border-bottom-color'] = this._color.toRgbString();
        }
    }

    ngOnInit() {
        this.HEXinput['border-bottom-color'] = this._color.toRgbString();
        this._afterOutsideColorSet.pipe(takeUntil(this._destroyed)).subscribe(() => {
            this.HEXinput['border-bottom-color'] = this._color.toRgbString();
        });
    }
}
