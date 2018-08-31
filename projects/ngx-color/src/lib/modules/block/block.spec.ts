import { Component } from '@angular/core';
import { async, TestBed, fakeAsync, tick, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ColorBlockModule } from './block.module';
import { BlockComponent } from './block.component';
import { ColorInput } from '@ctrl/tinycolor';

@Component({
    selector: 'ngx-color-block-test',
    template: '<ngx-color-block [colors]="colors" [triangle]="triangle"></ngx-color-block>'
})
class BlockTestComponent {
    colors: ColorInput[];
    triangle = 'hide';
}

describe('BlockComponent', () => {
    let fixture: ComponentFixture<BlockTestComponent>;
    let testInstance: BlockTestComponent;
    let blockInstance: BlockComponent;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BlockTestComponent],
            imports: [ColorBlockModule],
        });

        TestBed.compileComponents();
        fixture = TestBed.createComponent(BlockTestComponent);
        testInstance = fixture.componentInstance;
        blockInstance = fixture.debugElement.query(By.directive(BlockComponent)).componentInstance;
        fixture.detectChanges();
    }));

    afterEach(() => {
        fixture.destroy();
    });

    it(`should change color on swatch click`, () => {
        testInstance.colors = ['#000000'];
        fixture.detectChanges();
        const div = fixture.debugElement.query(By.css('.ngx-color-swatch-swatch'));
        div.triggerEventHandler('click', {});
        fixture.detectChanges();
        expect(blockInstance._color.toHexString()).toEqual('#000000');
    });

    it(`should change color on input`, fakeAsync(() => {
        const inputElement = fixture.debugElement.query(By.css('input'));
        inputElement.nativeElement.value = '#FFFFFF';
        inputElement.nativeElement.dispatchEvent(new Event('keydown'));
        inputElement.nativeElement.dispatchEvent(new Event('keyup'));
        tick(400);
        fixture.detectChanges();
        expect(blockInstance._color.toHexString()).toEqual('#ffffff');
    }));
});
