import { Component } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';

import { ColorChromeModule } from './chrome.module';

describe('BlockComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ChromeTestApp],
            imports: [ColorChromeModule],
        }).compileComponents();
    }));
});

@Component({
    selector: 'ngx-color-test-app',
    template: `
  <ngx-color-chrome>
  </ngx-color-chrome>
  `,
})
class ChromeTestApp {
}
