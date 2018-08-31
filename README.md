# Color pickers for Angular
[![npm version](https://badge.fury.io/js/%40daimoonis%2Fngx-color.svg)](https://badge.fury.io/js/%40daimoonis%2Fngx-color)
[![travis](https://travis-ci.com/daimoonis/ngx-color.svg?branch=master)](https://travis-ci.com/daimoonis/ngx-color)
[![codecov](https://codecov.io/gh/daimoonis/ngx-color/branch/master/graph/badge.svg)](https://codecov.io/gh/daimoonis/ngx-color)

* [About](#about)
* [Getting Started](#getting-started)
  * [Install](#install)
  * [Include Component](#include-component)
  * [Others available](#others-available)
* [Component API](#component-api)
  * [Color](#color)
  * [onChange](#onchange)
  * [onChangeComplete](#onchangecomplete)
  * [Individual APIs](#individual-apis)

## About

* **13 Different Pickers** - Sketch, Photoshop, Chrome and many more

* **Make Your Own** - Use the building block components to make your own

* This is a fork of (https://github.com/scttcper/ngx-color)
  by scttcper

### Main enhancements
* each component uses encapsulation strategy as ViewEncapsulation.None
* fix for sketch component for IE 11
* code refactored
* new _material-theming.scss available in bundle with Material theming support for all components
* standard .css available in two modes as light and dark version (light-theme.min.css and dark-theme.min.css)

## Getting Started

### Install

```sh
npm install @daimoonis/ngx-color --save
```

### Include Component

##### import

```ts
import { ColorSketchModule } from '@daimoonis/ngx-color';

@NgModule({
  imports: [
    ColorSketchModule, // added to imports
  ],
})
class YourModule {}
```

##### use

```html
<ngx-color-sketch [color]="colorInput" (onChangeComplete)="changeComplete($event)"></ngx-color-sketch>
```

### Others available

```ts
import { ColorAlphaModule } from '@daimoonis/ngx-color'; // <ngx-color-alpha-picker></ngx-color-alpha-picker>
import { ColorBlockModule } from '@daimoonis/ngx-color'; // <ngx-color-block></ngx-color-block>
import { ColorChromeModule } from '@daimoonis/ngx-color'; // <ngx-color-chrome></ngx-color-chrome>
import { ColorCircleModule } from '@daimoonis/ngx-color'; // <ngx-color-circle></ngx-color-circle>
import { ColorCompactModule } from '@daimoonis/ngx-color'; // <ngx-color-compact></ngx-color-compact>
import { ColorGithubModule } from '@daimoonis/ngx-color'; // <ngx-color-github></ngx-color-github>
import { ColorHueModule } from '@daimoonis/ngx-color'; // <ngx-color-hue-picker></ngx-color-hue-picker>
import { ColorMaterialModule } from '@daimoonis/ngx-color'; // <ngx-color-material></ngx-color-material>
import { ColorPhotoshopModule } from '@daimoonis/ngx-color'; // <ngx-color-photoshop></ngx-color-photoshop>
import { ColorSketchModule } from '@daimoonis/ngx-color'; // <ngx-color-sketch></ngx-color-sketch>
import { ColorSliderModule } from '@daimoonis/ngx-color'; // <ngx-color-slider></ngx-color-slider>
import { ColorSwatchesModule } from '@daimoonis/ngx-color'; // <ngx-color-swatches></ngx-color-swatches>
import { ColorTwitterModule } from '@daimoonis/ngx-color'; // <ngx-color-twitter></ngx-color-twitter>
```

# Component API

## Color

Color controls what color is active on the color picker. You can use this to
initialize the color picker with a particular color, or to keep it in sync with
the state of a parent component.

Color accepts ColorInput of these interfaces: 
```ts
type ColorInput = string | RGB | RGBA | HSL | HSLA | HSV | HSVA | TinyColor;
// TinyColor is instance from @ctrl/tinycolor library
```

in details:

```ts
export interface RGB {
    r: number | string;
    g: number | string;
    b: number | string;
}
export interface RGBA extends RGB {
    a: number;
}
export interface HSL {
    h: number | string;
    s: number | string;
    l: number | string;
}
export interface HSLA extends HSL {
    a: number;
}
export interface HSV {
    h: number | string;
    s: number | string;
    v: number | string;
}
export interface HSVA extends HSV {
    a: number;
}
```

For example a string of a hex color `'#333'` or a object of rgb or hsl
values `{ r: 51, g: 51, b: 51 }` or `{ h: 0, s: 0, l: .10 }` is accepted. Both rgb and hsl
will also take a `a: 1` value for alpha. You can also use `transparent`, `green` etc...

```html
<ngx-color-sketch
  color="#fff"
  (onChangeComplete)="handleChangeComplete($event)"
></ngx-color-sketch>
```

In this case, the color picker will initialize with the color `#fff`. When the
color is changed, `handleChangeComplete` will fire and set the new color to
state.

## onChange

Pass a function to call every time the color is changed. Use this to store the
color in the state of a parent component or to make other transformations.

Keep in mind this is called on drag events that can happen quite frequently. If
you just need to get the color once use `onChangeComplete`.

```ts
import { Component } from '@angular/core';
import { ColorEvent } from '@daimoonis/ngx-color';

@Component({
  selector: 'selector-name',
  template: `
  <ngx-color-sketch (onChange)="handleChange($event)"></ngx-color-sketch>
  `,
})
export class NameComponent {
  constructor() {}

  handleChange($event: ColorEvent) {
    console.log($event.color);
    // color = {
    //   hex: '#333',
    //   rgb: {
    //     r: 51,
    //     g: 51,
    //     b: 51,
    //     a: 1,
    //   },
    //   hsl: {
    //     h: 0,
    //     s: 0,
    //     l: .20,
    //     a: 1,
    //   },
    // }
  }
}
```

## onChangeComplete

Pass a function to call once a color change is complete.

## Individual APIs

Some pickers have specific APIs that are unique to themselves:

### Alpha

* **width** - String | Number, Pixel value for picker width. Default `316px`
* **height** - String | Number, Pixel value for picker height. Default `16px`
* **direction** - String, `horizontal` or `vertical`. Default `horizontal`

### Block

* **width** - string | number, Pixel value for picker width. Default `170px`
* **colors** - Array of ColorInput, Color squares to display. Default `['#D9E3F0',
  '#F47373', '#697689', '#37D67A', '#2CCCE4', '#555555', '#dce775', '#ff8a65',
  '#ba68c8']`
* **triangle** - String, Either `hide` or `top`. Default `top`
* **onSwatchHover** - (Output) An event handler for `onMouseOver` on the
  `<Swatch>`s within this component. Gives the args `(color, event)`

### Chrome

* **disableAlpha** - Bool, Remove alpha slider and options from picker. Default
  `false`

### Circle

* **width** - String | number, Pixel value for picker width. Default `252px`
* **colors** - Array of ColorInput, Color squares to display. Default `["#f44336",
  "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4",
  "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800",
  "#ff5722", "#795548", "#607d8b"]`
* **circleSize** - Number, Value for circle size. Default `28`
* **circleSpacing** - Number, Value for spacing between circles. Default `14`
* **onSwatchHover** - (Output) An event handler for `onMouseOver` on the
  `<Swatch>`s within this component. Gives the args `(color, event)`

### Compact

* **colors** - Array of ColorInput, Color squares to display. Default `['#4D4D4D',
  '#999999', '#FFFFFF', '#F44E3B', '#FE9200', '#FCDC00', '#DBDF00', '#A4DD00',
  '#68CCCA', '#73D8FF', '#AEA1FF', '#FDA1FF', '#333333', '#808080', '#cccccc',
  '#D33115', '#E27300', '#FCC400', '#B0BC00', '#68BC00', '#16A5A5', '#009CE0',
  '#7B64FF', '#FA28FF', '#000000', '#666666', '#B3B3B3', '#9F0500', '#C45100',
  '#FB9E00', '#808900', '#194D33', '#0C797D', '#0062B1', '#653294', '#AB149E']`
* **onSwatchHover** - (Output) An event handler for `onMouseOver` on the
  `<Swatch>`s within this component. Gives the args `(color, event)`

### Github

* **width** - string | number, Pixel value for picker width. Default `212px`
* **colors** - Array of ColorInput, Color squares to display. Default `['#B80000',
  '#DB3E00', '#FCCB00', '#008B02', '#006B76', '#1273DE', '#004DCF', '#5300EB',
  '#EB9694', '#FAD0C3', '#FEF3BD', '#C1E1C5', '#BEDADC', '#C4DEF6', '#BED3F3',
  '#D4C4FB']`
* **triangle** - String, Either `hide`, `top-left` or `top-right`. Default
  `top-left`
* **onSwatchHover** - (Output) An event handler for `onMouseOver` on the
  `<Swatch>`s within this component. Gives the args `(color, event)`

### Hue

* **width** - string | number, Pixel value for picker width. Default `316px`
* **height** - string | number, Pixel value for picker height. Default `16px`
* **direction** - String Enum, `horizontal` or `vertical`. Default `horizontal`

### Material

None

### Photoshop

* **header** - String, Title text. Default `Color Picker`
* **onAccept** - (Output), Callback for when accept is clicked.
* **onCancel** - (Output), Callback for when cancel is clicked.

### Sketch

* **disableAlpha** - Bool, Remove alpha slider and options from picker. Default
  `false`
* **presetColors** - Array of ColorInput. Default `['#D0021B', '#F5A623', '#F8E71C', '#8B572A',
  '#7ED321', '#417505', '#BD10E0', '#9013FE', '#4A90E2', '#50E3C2', '#B8E986',
  '#000000', '#4A4A4A', '#9B9B9B', '#FFFFFF']`
  > **presetColors** may also be described as an array of objects with `color`
  > and `title` properties: `[{ color: '#f00', title: 'red' }]` or a combination
  > of both
* **width** - Number, Width of picker. Default `200`
* **onSwatchHover** - An event handler for `onMouseOver` on the `<Swatch>`s
  within this component. Gives the args `(color, event)`

### Slider

* **pointer** - React Component, Custom pointer component

### Swatches

* **width** - string | number, Pixel value for picker width. Default `320`
* **height** - string | number, Pixel value for picker height. Default `240`
* **colors** - Array of Arrays of ColorInput, An array of color groups, each with
  an array of colors
* **onSwatchHover** - (Output) An event handler for `onMouseOver` on the
  `<Swatch>`s within this component. Gives the args `(color, event)`

### Twitter

* **width** - string | number, Pixel value for picker width. Default `276px`
* **colors** - Array of ColorInput, Color squares to display. Default `['#FF6900',
  '#FCB900', '#7BDCB5', '#00D084', '#8ED1FC', '#0693E3', '#ABB8C3', '#EB144C',
  '#F78DA7', '#9900EF']`
* **triangle** - String, Either `hide`, `top-left` or `top-right`. Default
  `top-left`
* **onSwatchHover** - (Output) An event handler for `onMouseOver` on the
  `<Swatch>`s within this component. Gives the args `(color, event)`

---

> GitHub [@daimoonis](https://github.com/daimoonis)
