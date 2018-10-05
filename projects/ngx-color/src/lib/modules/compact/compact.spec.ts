import { Component } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';

import { ColorCompactModule } from './compact.module';

describe('CompactComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CompactTestApp],
            imports: [ColorCompactModule],
        }).compileComponents();
    }));
});

@Component({
    selector: 'ngx-color-test-app',
    template: `
  <ngx-color-compact>
  </ngx-color-compact>
  `,
})
class CompactTestApp {
}
