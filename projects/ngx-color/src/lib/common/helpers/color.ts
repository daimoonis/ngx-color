import { ColorInput } from '@ctrl/tinycolor';
import { isNil } from 'lodash';
import { NgxColor } from './ngx-color';

export function parseColors(data: ColorInput[]): NgxColor[] {
    if (isNil(data)) {
        return [];
    }
    const returnData: NgxColor[] = [];
    for (let index = 0; index < data.length; index++) {
        const ngxColorInstance = new NgxColor(data[index]);
        if (ngxColorInstance.isValid) {
            returnData.push(ngxColorInstance);
        }

    }

    return returnData;
}

export function parseColors2(data: ColorInput[][]): NgxColor[][] {
    if (isNil(data)) {
        return [];
    }
    const returnData: NgxColor[][] = [];
    for (let i = 0; i < data.length; i++) {
        const returnInnerData: NgxColor[] = [];
        if (isNil(data[i])) {
            returnData.push(returnInnerData);
            continue;
        }
        for (let j = 0; j < data[i].length; j++) {
            const ngxColorInstance = new NgxColor(data[i][j]);
            if (ngxColorInstance.isValid) {
                returnInnerData.push(ngxColorInstance);
            }
        }
        returnData.push(returnInnerData);
    }

    return returnData;
}
