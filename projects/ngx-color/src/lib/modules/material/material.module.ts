import { NgModule } from '@angular/core';
import { MaterialComponent } from './material.component';
import { CommonModule } from '@angular/common';
import { EditableInputModule, RaisedModule } from '@ngx-color-project/common';

@NgModule({
    exports: [MaterialComponent],
    declarations: [MaterialComponent],
    imports: [CommonModule, EditableInputModule, RaisedModule]
})
export class ColorMaterialModule { }
