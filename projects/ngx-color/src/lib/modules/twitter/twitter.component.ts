import {
    ChangeDetectionStrategy, Component, Input, ViewEncapsulation,
    HostBinding, ChangeDetectorRef, OnInit, OnDestroy
} from '@angular/core';
import { ColorWrap, parseColors, NgxColor } from '../../common/public_api';
import { ColorInput } from '@ctrl/tinycolor';
import { isNil } from 'lodash';
import { Subject } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';

@Component({
    selector: 'ngx-color-twitter',
    templateUrl: './twitter.component.html',
    styleUrls: ['./twitter.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class TwitterComponent extends ColorWrap implements OnInit, OnDestroy {
    public static readonly DEFAULT_COLORS = [
        '#FF6900',
        '#FCB900',
        '#7BDCB5',
        '#00D084',
        '#8ED1FC',
        '#0693E3',
        '#ABB8C3',
        '#EB144C',
        '#F78DA7',
        '#9900EF'
    ];
    @HostBinding('class.ngx-color-twitter')
    _hostClass = true;
    /** Pixel value for picker width */
    @Input() width: string | number = 276;
    _colors: NgxColor[];
    /** Color squares to display */
    @Input()
    get colors(): ColorInput[] {
        return this._colors;
    }
    set colors(colors: ColorInput[]) {
        this._colors = !isNil(colors) ? parseColors(colors) : parseColors(TwitterComponent.DEFAULT_COLORS);
    }
    @Input() triangle: 'hide' | 'top-left' | 'top-right' | 'bottom-right' = 'top-left';

    _destroyed = new Subject<void>();
    _debounceValueChange = new Subject<{ data: string, $event: Event }>();

    constructor(changeDetectorRef: ChangeDetectorRef) {
        super(changeDetectorRef);
        this._colors = parseColors(TwitterComponent.DEFAULT_COLORS);
    }

    focus(color: string) {
        return { boxShadow: `0 0 4px ${color}` };
    }

    handleBlockChange({ color, $event }) {
        this.handleChange(color, $event);
    }

    ngOnInit() {
        this._debounceValueChange.pipe(debounceTime(400), takeUntil(this._destroyed)).subscribe((d) => {
            this.handleChange(new NgxColor('#'.concat(d.data)));
        });
    }

    ngOnDestroy() {
        this._destroyed.next();
        this._destroyed.complete();
    }
}
