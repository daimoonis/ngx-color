import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaisedComponent } from './raised.component';

@NgModule({
    declarations: [RaisedComponent],
    exports: [RaisedComponent],
    imports: [CommonModule],
})
export class RaisedModule { }
