import { NgModule } from '@angular/core';
import { TwitterComponent } from './twitter.component';
import { SwatchModule, EditableInputModule } from '../../common';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [TwitterComponent],
    exports: [TwitterComponent],
    imports: [CommonModule, SwatchModule, EditableInputModule],
})
export class ColorTwitterModule { }
