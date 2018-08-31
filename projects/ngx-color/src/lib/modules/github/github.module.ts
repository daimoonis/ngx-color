import { NgModule } from '@angular/core';
import { GithubComponent } from './github.component';
import { GithubSwatchComponent } from './github-swatch.component';
import { CommonModule } from '@angular/common';
import { SwatchModule } from '@ngx-color-project/common';

@NgModule({
    declarations: [GithubComponent, GithubSwatchComponent],
    exports: [GithubComponent, GithubSwatchComponent],
    imports: [CommonModule, SwatchModule]
})
export class ColorGithubModule { }
