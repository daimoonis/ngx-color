import { Component } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ColorCircleModule } from './circle.module';

describe('BlockComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CircleTestApp],
            imports: [ColorCircleModule],
        }).compileComponents();
    }));
});

@Component({
    selector: 'ngx-color-test-app',
    template: `
  <ngx-color-circle>
  </ngx-color-circle>
  `,
})
class CircleTestApp {
}
