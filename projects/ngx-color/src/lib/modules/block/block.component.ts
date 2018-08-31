import {
    ChangeDetectionStrategy,
    Component,
    Input,
    HostBinding,
    ViewEncapsulation,
    ChangeDetectorRef,
    OnInit
} from '@angular/core';
import { ColorWrap, NgxColor, parseColors } from '@ngx-color-project/common';
import { ColorInput } from '@ctrl/tinycolor';
import { isNil } from 'lodash';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
    selector: 'ngx-color-block',
    templateUrl: './block.component.html',
    styleUrls: ['./block.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class BlockComponent extends ColorWrap implements OnInit {
    public static readonly DEFAULT_COLORS = [
        '#D9E3F0',
        '#F47373',
        '#697689',
        '#37D67A',
        '#2CCCE4',
        '#555555',
        '#dce775',
        '#ff8a65',
        '#ba68c8'
    ];
    @HostBinding('class.ngx-color-block')
    _hostClass = true;
    /** Pixel value for picker width */
    @Input() width: string | number = 170;
    _colors: NgxColor[];
    /** Color squares to display */
    @Input()
    get colors(): ColorInput[] {
        return this._colors;
    }
    set colors(colors: ColorInput[]) {
        this._colors = !isNil(colors) ? parseColors(colors) : parseColors(BlockComponent.DEFAULT_COLORS);
        this.changeDetectorRef.markForCheck();
    }
    @Input() triangle: 'top' | 'hide' = 'top';

    _debounceValueChange = new Subject<{ data: string, $event: Event }>();

    constructor(changeDetectorRef: ChangeDetectorRef) {
        super(changeDetectorRef);
        this._colors = parseColors(BlockComponent.DEFAULT_COLORS);
    }

    handleBlockChange({ color, $event }) {
        this.handleChange(color, $event);
    }

    ngOnInit() {
        this._debounceValueChange.pipe(debounceTime(400), takeUntil(this._destroyed)).subscribe((d) => {
            const newColor = new NgxColor(d.data);
            if (newColor.isValid) {
                this.handleChange(newColor, d.$event);
            }
        });
    }
}
