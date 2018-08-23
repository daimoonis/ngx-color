import { NgModule } from '@angular/core';
import { MaterialComponent } from './material.component';
import { CommonModule } from '@angular/common';
import { EditableInputModule, RaisedModule } from '../../common/public_api';

@NgModule({
    exports: [MaterialComponent],
    declarations: [MaterialComponent],
    imports: [CommonModule, EditableInputModule, RaisedModule],
})
export class ColorMaterialModule { }
