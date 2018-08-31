import { Component } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ColorTwitterModule } from './twitter.module';

describe('TwitterComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TwitterTestApp],
            imports: [ColorTwitterModule],
        }).compileComponents();
    }));
});

@Component({
    selector: 'ngx-color-test-app',
    template: `
  <ngx-color-twitter>
  </ngx-color-twitter>
  `,
})
class TwitterTestApp {
}
