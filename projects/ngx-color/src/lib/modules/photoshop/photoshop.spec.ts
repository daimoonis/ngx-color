import { Component } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { ColorPhotoshopModule } from './photoshop.module';

describe('PhotoshopComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PhotoshopTestApp],
            imports: [ColorPhotoshopModule],
        }).compileComponents();
    }));
});

@Component({
    selector: 'ngx-color-test-app',
    template: `
  <ngx-color-photoshop>
  </ngx-color-photoshop>
  `,
})
class PhotoshopTestApp {
}
