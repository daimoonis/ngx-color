import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <footer class="footer mb-4 mt-5">
    Angular {{ version }}
    <br>
    Released under the
    <a href="https://github.com/daimoonis/ngx-color/blob/master/LICENSE">MIT</a> license
    <br>
    Listed on <a href="https://www.npmjs.com/package/@daimoonis/ngx-color">npm</a>
  </footer>
  `,
  styles: [
    `
      .footer {
        line-height: 2;
        text-align: center;
        font-size: 70%;
        color: #999;
        font-family: var(--font-family-monospace)
      }
    `,
  ],
})
export class FooterComponent {
  version = VERSION.full;
}
