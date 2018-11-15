import { Component } from '@angular/core';
import { TestBed, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ColorSketchModule } from './sketch.module';
import { SketchComponent } from './sketch.component';
import { NgxColor } from '../../common/public_api';
import { ColorInput } from '@ctrl/tinycolor';

describe('SketchComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SketchTestComponent],
            imports: [ColorSketchModule],
        }).compileComponents();
    });
    describe('SketchComponent', () => {
        let fixture: ComponentFixture<SketchTestComponent>;
        let testInstance: SketchTestComponent;
        let sketchInstance: SketchComponent;

        beforeEach(() => {
            fixture = TestBed.createComponent(SketchTestComponent);
            fixture.detectChanges();
            testInstance = fixture.componentInstance;
            sketchInstance = fixture.debugElement.query(By.directive(SketchComponent)).componentInstance;
        });

        it('should check default settings', () => {
            expect(sketchInstance.presetColors).toEqual(
                [
                    new NgxColor('#D0021B'),
                    new NgxColor('#F5A623'),
                    new NgxColor('#F8E71C'),
                    new NgxColor('#8B572A'),
                    new NgxColor('#7ED321'),
                    new NgxColor('#417505'),
                    new NgxColor('#BD10E0'),
                    new NgxColor('#9013FE'),
                    new NgxColor('#4A90E2'),
                    new NgxColor('#50E3C2'),
                    new NgxColor('#B8E986'),
                    new NgxColor('#000000'),
                    new NgxColor('#4A4A4A'),
                    new NgxColor('#9B9B9B'),
                    new NgxColor('#FFFFFF')
                ]
            );
        });

        it('should sketch component have ngx-color-sketch class', () => {
            const sketchDebugEl = fixture.debugElement.query(By.directive(SketchComponent));
            expect(sketchDebugEl.classes['ngx-color-sketch']).toBeTruthy();
        });

        it('should sketch component set preset colors', () => {
            testInstance.presetColors = ['#eee', '#195'];
            fixture.detectChanges();
            expect(sketchInstance.presetColors).toEqual([new NgxColor('#eee'), new NgxColor('#195')]);
        });

        it('should call handleBlockChange and emit new color', fakeAsync(() => {
            testInstance.presetColors = ['#eee', '#195'];
            fixture.detectChanges();
            expect(testInstance.outputColor).toBeUndefined();
            const allPresetColorsDebugEl = fixture.debugElement.queryAll(By.css('.ngx-color-sketch-preset-colors-sketch-wrap'));
            expect(allPresetColorsDebugEl.length).toEqual(2);
            allPresetColorsDebugEl[0].query(By.css('.ngx-color-swatch-swatch')).triggerEventHandler('click', null);
            fixture.detectChanges();
            tick(150);
            expect(testInstance.outputColor).toEqual(new NgxColor('#eee'));
        }));

        it('should call handleValueChange and emit new color', fakeAsync(() => {
            testInstance.presetColors = ['#eee', '#195'];
            fixture.detectChanges();
            expect(testInstance.outputColor).toBeUndefined();
            const allPresetColorsDebugEl = fixture.debugElement.queryAll(By.css('.ngx-color-sketch-preset-colors-sketch-wrap'));
            expect(allPresetColorsDebugEl.length).toEqual(2);
            allPresetColorsDebugEl[0].query(By.css('.ngx-color-swatch-swatch')).triggerEventHandler('click', null);
            fixture.detectChanges();
            tick(150);
            expect(testInstance.outputColor).toEqual(new NgxColor('#eee'));
        }));
    });
});

@Component({
    selector: 'ngx-color-test-app',
    template: `
  <ngx-color-sketch [color]="color" [disableAlpha]="disableAlpha" [presetColors]="presetColors"
  (onChangeComplete)="onChangeComplete($event)">
  </ngx-color-sketch>
  `,
})
class SketchTestComponent {
    disableAlpha: boolean;
    presetColors: ColorInput[];
    color: ColorInput;
    outputColor: NgxColor;
    onChangeComplete({ev: $event, color: color}) {
        this.outputColor = color;
    }
}
