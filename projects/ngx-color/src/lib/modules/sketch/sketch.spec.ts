import { Component } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ColorSketchModule } from './sketch.module';

describe('SketchComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SketchTestApp],
            imports: [ColorSketchModule],
        }).compileComponents();
    }));
    it(`should apply className to root element`, async(() => {
        const fixture = TestBed.createComponent(SketchTestApp);
        fixture.detectChanges();
        const testComponent = fixture.debugElement.componentInstance;
        testComponent.className = 'classy';
        fixture.detectChanges();
        const divDebugElement = fixture.debugElement.query(By.css('.sketch-picker'));
        expect(divDebugElement.nativeElement.classList.contains('classy')).toBe(true);
    }));
});

@Component({
    selector: 'ngx-color-test-app',
    template: `
  <ngx-color-sketch [className]="className">
  </ngx-color-sketch>
  `,
})
class SketchTestApp {
    className = '';
}
