import { Component } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ColorSliderModule } from './slider.module';

describe('SliderComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SliderTestApp],
            imports: [ColorSliderModule],
        }).compileComponents();
    }));
});

@Component({
    selector: 'ngx-color-test-app',
    template: `
  <ngx-color-slider>
  </ngx-color-slider>
  `,
})
class SliderTestApp {
}
