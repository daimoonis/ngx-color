import { Component } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ColorChromeModule } from './chrome.module';

describe('BlockComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ChromeTestApp],
            imports: [ColorChromeModule],
        }).compileComponents();
    }));
    it(`should apply className to root element`, async(() => {
        const fixture = TestBed.createComponent(ChromeTestApp);
        const testComponent = fixture.debugElement.componentInstance;
        testComponent.className = 'classy';
        fixture.detectChanges();
        const divDebugElement = fixture.debugElement.query(By.css('.chrome-picker'));
        expect(divDebugElement.nativeElement.classList.contains('classy')).toBe(true);
    }));
});

@Component({
    selector: 'ngx-color-test-app',
    template: `
  <ngx-color-chrome [className]="className">
  </ngx-color-chrome>
  `,
})
class ChromeTestApp {
    className = '';
}
