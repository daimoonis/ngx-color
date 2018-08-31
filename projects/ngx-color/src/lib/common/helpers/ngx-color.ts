import { TinyColor } from '@ctrl/tinycolor';

export class NgxColor extends TinyColor {
    /**
     * Method to check if color is meant as transparent by ngx-color.
     */
    isTransparent() {
        return this.toHexString(false) === '#000000' && this.a === 0;
    }

    /**
     * Method to get basic contrasting color.
     */
    getContrastingColor() {
        if (this.isTransparent()) {
            return 'rgba(0,0,0,0.4)';
        }

        return this.isLight() ? '#000' : '#fff';
    }
}
