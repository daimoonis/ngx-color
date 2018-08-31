import { Component } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ColorMaterialModule } from './material.module';

describe('MaterialComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MaterialTestApp],
            imports: [ColorMaterialModule],
        }).compileComponents();
    }));
});

@Component({
    selector: 'ngx-color-test-app',
    template: `
  <ngx-color-material>
  </ngx-color-material>
  `,
})
class MaterialTestApp {
}
