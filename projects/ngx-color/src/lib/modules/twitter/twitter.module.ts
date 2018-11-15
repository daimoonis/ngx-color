import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwitterComponent } from './twitter.component';
import { SwatchModule, EditableInputModule } from '../../common/public_api';

@NgModule({
    declarations: [TwitterComponent],
    exports: [TwitterComponent],
    imports: [CommonModule, SwatchModule, EditableInputModule]
})
export class ColorTwitterModule { }
