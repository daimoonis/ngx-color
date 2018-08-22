import { Component } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ColorCompactModule } from './compact.module';

describe('CompactComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CompactTestApp],
            imports: [ColorCompactModule],
        }).compileComponents();
    }));
    it(`should apply className to root element`, async(() => {
        const fixture = TestBed.createComponent(CompactTestApp);
        fixture.detectChanges();
        const testComponent = fixture.debugElement.componentInstance;
        testComponent.className = 'classy';
        fixture.detectChanges();
        const divDebugElement = fixture.debugElement.query(By.css('.compact-picker'));
        expect(divDebugElement.nativeElement.classList.contains('classy')).toBe(true);
    }));
});

@Component({
    selector: 'ngx-color-test-app',
    template: `
  <ngx-color-compact [className]="className">
  </ngx-color-compact>
  `,
})
class CompactTestApp {
    className = '';
}
