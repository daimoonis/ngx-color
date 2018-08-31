import { Component } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ColorAlphaModule } from './alpha-picker.module';
import { AlphaPickerComponent } from './alpha-picker.component';

export const red = {
    hsl: { a: 1, h: 0, l: 0.5, s: 1 },
    hex: '#ff0000',
    rgb: { r: 255, g: 0, b: 0, a: 1 },
    hsv: { h: 0, s: 1, v: 1, a: 1 },
};


describe('AlphaComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AlphaTestApp],
            imports: [ColorAlphaModule],
        });

        TestBed.compileComponents();
    }));
    it(`should draw vertical`, () => {
        const fixture = TestBed.createComponent(AlphaTestApp);
        const testComponent = fixture.componentInstance;
        fixture.detectChanges();
        testComponent.direction = 'vertical';
        fixture.detectChanges();
        const div = fixture.debugElement.query(By.css('.ngx-color-alpha-container'));
        expect(div.nativeElement.classList.contains('ngx-color-alpha-vertical')).toBe(true);
    });
});

@Component({
    selector: 'ngx-color-test-app',
    template: `
  <ngx-color-alpha-picker
    [direction]="direction"
  >
  </ngx-color-alpha-picker>
  `,
})
class AlphaTestApp {
    direction = 'horizontal';
}
