import { Component } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';

import { ColorGithubModule } from './github.module';

describe('BlockComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GithubTestApp],
            imports: [ColorGithubModule],
        }).compileComponents();
    }));
});

@Component({
    selector: 'ngx-color-test-app',
    template: `
  <ngx-color-github>
  </ngx-color-github>
  `,
})
class GithubTestApp {
}
