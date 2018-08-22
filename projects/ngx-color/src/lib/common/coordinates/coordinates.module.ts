import { NgModule } from '@angular/core';
import { CoordinatesDirective } from './coordinates.directive';

@NgModule({
    declarations: [CoordinatesDirective],
    exports: [CoordinatesDirective],
})
export class CoordinatesModule { }
