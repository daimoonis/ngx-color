import { Component } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ColorSwatchesModule } from './swatches.module';

describe('SwatchesComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SwatchTestApp],
            imports: [ColorSwatchesModule],
        }).compileComponents();
    }));
});

@Component({
    selector: 'ngx-color-test-app',
    template: `
  <ngx-color-swatches>
  </ngx-color-swatches>
  `,
})
class SwatchTestApp {
}
