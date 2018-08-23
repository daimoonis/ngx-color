import { NgModule } from '@angular/core';
import { CompactComponent } from './compact.component';
import { CompactColorComponent } from './compact-color.component';
import { CompactFieldsComponent } from './compact-fields.component';
import { CommonModule } from '@angular/common';
import { EditableInputModule, SwatchModule, RaisedModule } from '../../common/public_api';

@NgModule({
    declarations: [
        CompactComponent,
        CompactColorComponent,
        CompactFieldsComponent,
    ],
    exports: [CompactComponent, CompactColorComponent, CompactFieldsComponent],
    imports: [CommonModule, EditableInputModule, SwatchModule, RaisedModule],
})
export class ColorCompactModule { }
