import { Component } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';

import { ColorHueModule } from './hue-picker.module';

describe('HuePickerComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HueTestApp],
            imports: [ColorHueModule],
        }).compileComponents();
    }));
});

@Component({
    selector: 'ngx-color-test-app',
    template: `
  <ngx-color-hue-picker>
  </ngx-color-hue-picker>
  `,
})
class HueTestApp {
}
