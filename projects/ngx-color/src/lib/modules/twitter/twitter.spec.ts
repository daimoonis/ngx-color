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
    it(`should apply className to root element`, async(() => {
        const fixture = TestBed.createComponent(TwitterTestApp);
        fixture.detectChanges();
        const testComponent = fixture.debugElement.componentInstance;
        testComponent.className = 'classy';
        fixture.detectChanges();
        const divDebugElement = fixture.debugElement.query(By.css('.twitter-picker'));
        expect(divDebugElement.nativeElement.classList.contains('classy')).toBe(true);
    }));
});

@Component({
    selector: 'ngx-color-test-app',
    template: `
  <ngx-color-twitter [className]="className">
  </ngx-color-twitter>
  `,
})
class TwitterTestApp {
    className = '';
}
